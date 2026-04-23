/**
 * Interactive script to create a single event
 * Prompts for event details and publishes to Sanity
 *
 * Usage:
 * 1. Set SANITY_WRITE_TOKEN in your environment
 * 2. Run: npx ts-node scripts/createEventInteractive.ts
 */

import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "../sanity/env";
import * as readline from "readline";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function createEventInteractive() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error(
      "❌ Error: SANITY_WRITE_TOKEN environment variable is not set",
    );
    console.log("\nTo set it, run:");
    console.log('export SANITY_WRITE_TOKEN="your-token-here"');
    console.log("\nGet your token from: https://sanity.io/manage");
    process.exit(1);
  }

  console.log("📝 Create a new event\n");

  try {
    const title = await question("Event title: ");
    const date = await question("Event date (YYYY-MM-DD): ");
    const time = await question('Event time (e.g., "7:00 PM - 9:00 PM"): ');
    const hasLocation = await question(
      "Does this event have a physical location? (yes/no): ",
    );

    let location;
    if (
      hasLocation.toLowerCase() === "yes" ||
      hasLocation.toLowerCase() === "y"
    ) {
      const locationName = await question("Location name: ");
      const street = await question("Street address: ");
      const cityStateZip = await question("City, State, and Zip: ");

      location = {
        name: locationName,
        street,
        cityStateZip,
      };
    }

    const description = await question("Event description: ");
    const linkTitle = await question("Link title (press Enter to skip): ");

    let links = [];
    if (linkTitle) {
      const linkUrl = await question("Link URL: ");
      links.push({
        _key: "link1",
        title: linkTitle,
        url: linkUrl,
      });
    }

    const eventData: any = {
      _type: "event",
      title,
      date,
      physicalLocation:
        hasLocation.toLowerCase() === "yes" ||
        hasLocation.toLowerCase() === "y",
      description: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: description,
            },
          ],
        },
      ],
      links,
    };

    if (time) {
      eventData.time = time;
    }

    if (location) {
      eventData.location = location;
    }

    console.log("\n📄 Event data:");
    console.log(JSON.stringify(eventData, null, 2));

    const confirm = await question("\nCreate this event? (yes/no): ");

    if (confirm.toLowerCase() !== "yes" && confirm.toLowerCase() !== "y") {
      console.log("❌ Cancelled");
      rl.close();
      return;
    }

    console.log("\n🚀 Creating event...");

    // Create the draft
    const result = await client.create(eventData);
    console.log(`✅ Created draft: ${result._id}`);

    // Publish the document
    const documentId = result._id.replace("drafts.", "");
    const publishResult = await client.createOrReplace({
      ...eventData,
      _id: documentId,
    });

    console.log(`✅ Published event: ${publishResult._id}`);
    console.log("\n🎉 Event created successfully!");
    console.log(
      `View it in Sanity Studio: https://hayniescorner.sanity.studio/desk/event;${documentId}`,
    );
  } catch (error) {
    console.error("❌ Error creating event:", error);
  } finally {
    rl.close();
  }
}

createEventInteractive();
