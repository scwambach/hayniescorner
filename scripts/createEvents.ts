/**
 * Script to create and publish events to Sanity
 *
 * Usage:
 * 1. Set SANITY_WRITE_TOKEN in your environment
 * 2. Run: npx ts-node scripts/createEvents.ts
 *
 * Or configure the events array and run the script
 */

import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "../sanity/env";

// Create a client with write permissions
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // Required for write operations
});

// Sample event data - modify as needed
const eventsToCreate = [
  {
    _type: "event",
    title: "Community Arts Festival",
    date: "2026-06-15",
    time: "10:00 AM - 4:00 PM",
    physicalLocation: true,
    location: {
      name: "Haynes Corner Park",
      street: "123 Main Street",
      cityStateZip: "Haynes Corner, VA 12345",
    },
    description: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Join us for our annual Community Arts Festival featuring local artists, live music, food vendors, and family-friendly activities.",
          },
        ],
      },
    ],
    links: [
      {
        _key: "link1",
        title: "Register Here",
        url: "https://example.com/register",
      },
    ],
  },
  {
    _type: "event",
    title: "Summer Concert Series",
    date: "2026-07-20",
    time: "7:00 PM - 9:00 PM",
    physicalLocation: true,
    location: {
      name: "Haynes Corner Amphitheater",
      street: "456 Park Avenue",
      cityStateZip: "Haynes Corner, VA 12345",
    },
    description: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Enjoy live music under the stars with our Summer Concert Series. Bring your blankets and lawn chairs!",
          },
        ],
      },
    ],
    links: [],
  },
  {
    _type: "event",
    title: "Virtual Business Workshop",
    date: "2026-08-10",
    time: "6:00 PM - 8:00 PM",
    physicalLocation: false,
    description: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Learn essential business skills in this virtual workshop. Topics include marketing, finance, and customer relations.",
          },
        ],
      },
    ],
    links: [
      {
        _key: "link1",
        title: "Join Zoom Meeting",
        url: "https://zoom.us/j/example",
      },
    ],
  },
];

async function createEvents() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error(
      "❌ Error: SANITY_WRITE_TOKEN environment variable is not set",
    );
    console.log("\nTo set it, run:");
    console.log('export SANITY_WRITE_TOKEN="your-token-here"');
    console.log("\nGet your token from: https://sanity.io/manage");
    process.exit(1);
  }

  console.log("🚀 Starting to create events...\n");

  try {
    for (const eventData of eventsToCreate) {
      console.log(`Creating event: ${eventData.title}`);

      // Create the document as a draft
      const result = await client.create(eventData);
      console.log(`✅ Created draft: ${result._id}`);

      // Publish the document by creating a non-draft version
      const documentId = result._id.replace("drafts.", "");
      const publishResult = await client.createOrReplace({
        ...eventData,
        _id: documentId,
      });

      console.log(`✅ Published event: ${publishResult._id}\n`);
    }

    console.log("🎉 All events created and published successfully!");
  } catch (error) {
    console.error("❌ Error creating events:", error);
    process.exit(1);
  }
}

// Run the script
createEvents();
