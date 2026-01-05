import imageQuery from "./imageQuery";

export const pastEventsQuery = `*[_type == "eventsPage"][0] {
  pageDescription,
  "mainImage": {
    "url": mainImage.asset->url
  },
  previewImage ${imageQuery},
  heroBanner {
    backgroundImage ${imageQuery},
    heading
  },
  "events": *[_type == "event" && ((_id in path('drafts.**')) == false) && date < $todayDate] | order(date desc) {
    _id, 
    title,
    image ${imageQuery},
    description,
    physicalLocation,
    location,
    time,
    links,
    date
  }
}`;
