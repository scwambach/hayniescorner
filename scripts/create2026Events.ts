/**
 * Script to create 2026 events for Haynie's Corner
 *
 * Usage:
 * Run: npx tsx scripts/create2026Events.ts
 *
 * Uses SANITY_TOKEN from .env file
 */

import { createClient } from "@sanity/client";
import * as fs from "fs";
import * as path from "path";

// Load environment variables from .env file
const envPath = path.join(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  envContent.split("\n").forEach((line) => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
}

const apiVersion = "2025-12-11";
const dataset = process.env.SANITY_DATASET || "production";
const projectId = process.env.SANITY_ID || "moxp0ys1";
const token = process.env.SANITY_TOKEN;

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: token,
});

// Default location for all events
const defaultLocation = {
  name: "Haynie's Corner",
  street: "Haynie's Corner",
  cityStateZip: "Evansville, IN 47713",
};

// Parse the events list
const events2026 = [
  { month: 5, day: 1, title: "First Friday" },
  { month: 6, day: 5, title: "First Friday (Pride)" },
  { month: 6, day: 12, title: "Pride Music Night" },
  { month: 6, day: 13, title: "Heavy on Haynie's" },
  { month: 7, day: 3, title: "First Friday (Hot Dog)" },
  { month: 7, day: 12, title: "Wiffleball All Star Game" },
  { month: 8, day: 7, title: "First Friday (Latin Dance)" },
  { month: 9, day: 4, title: "First Friday (90's Prom)" },
  { month: 9, day: 5, title: "Front Porch Fest" },
  { month: 9, day: 6, title: "Front Porch Fest After Party" },
  { month: 10, day: 2, title: "First Friday" },
  { month: 10, day: 16, title: "Haunted Historic Evansville" },
  { month: 10, day: 17, title: "Haunted Historic Evansville" },
  { month: 10, day: 21, title: "Volunteer Appreciation Party" },
  { month: 10, day: 28, title: "Pumpkin Carving" },
  { month: 2, day: 7, title: "Chili Cook Off", year: 2027 }, // February is next year
];

async function create2026Events() {
  if (!token) {
    console.error("❌ Error: SANITY_TOKEN not found in .env file");
    process.exit(1);
  }

  console.log(`📍 Using project: ${projectId}`);
  console.log(`📍 Using dataset: ${dataset}`);
  console.log(
    `📍 Using token: ${token.substring(0, 10)}...${token.substring(token.length - 10)}\n`,
  );

  console.log("🚀 Creating 2026 events for Haynie's Corner...\n");

  try {
    for (const event of events2026) {
      const year = event.year || 2026;
      const dateString = `${year}-${String(event.month).padStart(2, "0")}-${String(event.day).padStart(2, "0")}`;

      // Check if event already exists
      const existing = await client.fetch(
        `*[_type == "event" && title == $title && date == $date][0]`,
        { title: event.title, date: dateString }
      );

      if (existing) {
        console.log(`⏭️  Skipping: ${event.title} (${dateString}) - already exists`);
        continue;
      }

      const eventData = {
        _type: "event",
        title: event.title,
        date: dateString,
        physicalLocation: true,
        location: defaultLocation,
        description: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "",
              },
            ],
          },
        ],
        links: [],
      };

      console.log(`Creating: ${event.title} (${dateString})`);

      // Create the draft
      const result = await client.create(eventData);
      console.log(`  ✅ Created draft: ${result._id}`);

      // Publish the document
      const documentId = result._id.replace("drafts.", "");
      await client.createOrReplace({
        ...eventData,
        _id: documentId,
      });

      console.log(`  ✅ Published: ${documentId}\n`);
    }

    console.log("🎉 All events created and published successfully!");
    console.log(`\nTotal events created: ${events2026.length}`);
  } catch (error) {
    console.error("❌ Error creating events:", error);
    process.exit(1);
  }
}

create2026Events();
