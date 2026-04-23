# Sanity Scripts

This directory contains scripts for managing Sanity content.

## Scripts Available

1. **createEvents.ts** - Batch create multiple events from a predefined array
2. **createEventInteractive.ts** - Interactive CLI to create a single event with prompts

## Create Events Script (Batch)

The `createEvents.ts` script allows you to create and publish multiple events to your Sanity project at once.

### Setup

1. **Get a Sanity Write Token:**
   - Go to https://sanity.io/manage
   - Select your project
   - Navigate to API settings
   - Create a new token with "Editor" or "Administrator" permissions
   - Copy the token

2. **Set the environment variable:**
   ```bash
   export SANITY_WRITE_TOKEN="your-token-here"
   ```

### Usage

Run the script using ts-node:

```bash
npx ts-node scripts/createEvents.ts
```

### Customizing Events

Edit the `eventsToCreate` array in the script to add your own events. Each event should have:

- **title** (required): Event name
- **date** (required): Event date in YYYY-MM-DD format
- **time** (optional): Event time as a string
- **physicalLocation** (required): Boolean indicating if there's a physical location
- **location** (optional): Object with name, street, and cityStateZip (only if physicalLocation is true)
- **description**: Array of portable text blocks
- **links**: Array of link objects with title and url

### Example Event

```typescript
{
  _type: 'event',
  title: 'Community Arts Festival',
  date: '2026-06-15',
  time: '10:00 AM - 4:00 PM',
  physicalLocation: true,
  location: {
    name: 'Haynes Corner Park',
    street: '123 Main Street',
    cityStateZip: 'Haynes Corner, VA 12345',
  },
  description: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Your event description here.',
        },
      ],
    },
  ],
  links: [
    {
      _key: 'link1',
      title: 'Register Here',
      url: 'https://example.com/register',
    },
  ],
}
```

### Adding Images

To add images to events, you'll need to upload the image to Sanity first and reference it:

```typescript
image: {
  _type: 'image',
  asset: {
    _type: 'reference',
    _ref: 'image-asset-id-here'
  }
}
```

Or use the Sanity Studio UI to add images after creating the events.

## Create Event Interactive Script

The `createEventInteractive.ts` script provides an interactive command-line interface to create a single event.

### Usage

```bash
npx ts-node scripts/createEventInteractive.ts
```

The script will prompt you for:

- Event title
- Event date
- Event time
- Physical location (yes/no)
- Location details (if physical location)
- Event description
- Optional link

After entering all details, you'll see a preview and can confirm before creating the event.
