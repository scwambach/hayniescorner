import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables from .env file
const envPath = path.join(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
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

const apiVersion = '2025-12-11';
const dataset = process.env.SANITY_DATASET || 'production';
const projectId = process.env.SANITY_ID || 'moxp0ys1';
const token = process.env.SANITY_TOKEN;

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: token,
});

async function removeDuplicates() {
  try {
    const events = await client.fetch(
      `*[_type == "event" && date >= "2026-01-01"] | order(date asc, _createdAt asc) {
        _id,
        _createdAt,
        title,
        date
      }`
    );
    
    console.log(`\n📊 Found ${events.length} events for 2026\n`);
    
    // Group by title and date
    const grouped = new Map();
    for (const event of events) {
      const key = `${event.date}|${event.title}`;
      if (!grouped.has(key)) {
        grouped.set(key, []);
      }
      grouped.get(key).push(event);
    }
    
    // Find duplicates
    const toDelete = [];
    for (const [key, eventGroup] of grouped.entries()) {
      if (eventGroup.length > 1) {
        // Keep the first one (oldest), delete the rest
        const [keep, ...duplicates] = eventGroup;
        console.log(`📌 Keeping: ${keep.date} - ${keep.title} (${keep._id})`);
        for (const dup of duplicates) {
          console.log(`   🗑️  Deleting duplicate: ${dup._id}`);
          toDelete.push(dup._id);
        }
      }
    }
    
    if (toDelete.length === 0) {
      console.log('\n✅ No duplicates found!');
      return;
    }
    
    console.log(`\n🗑️  Deleting ${toDelete.length} duplicate events...`);
    
    for (const id of toDelete) {
      await client.delete(id);
      console.log(`   ✅ Deleted: ${id}`);
    }
    
    console.log(`\n🎉 Successfully removed ${toDelete.length} duplicates!`);
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

removeDuplicates();
