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

async function check2026Events() {
  try {
    const events = await client.fetch(
      `*[_type == "event" && date >= "2026-01-01"] | order(date asc) {
        _id,
        title,
        date
      }`,
    );

    console.log(`\n📊 Found ${events.length} events for 2026:\n`);
    events.forEach((event, index) => {
      console.log(`${index + 1}. ${event.date} - ${event.title}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

check2026Events();
