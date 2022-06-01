const mapStyle = [
  {
    elementType: 'labels',
    stylers: [
      {
        // visibility: 'off',
      },
      {
        color: '#ccc',
      },
      {
        weight: 1,
      },
    ],
  },
  {
    featureType: 'landscape',
    stylers: [
      {
        color: '#ee9b00',
      },
    ],
  },
  {
    featureType: 'road',
    stylers: [
      // {
      //   color: '#ffffff',
      // },
      // {
      //   lightness: 43,
      // },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    stylers: [
      {
        color: '#005f73',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e0e0e0',
      },
      {
        weight: 3,
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.business',
  },
  {
    featureType: 'poi.park',
    stylers: [
      {
        color: '#005f73',
      },
    ],
  },
  {
    featureType: 'poi.school',
    stylers: [
      {
        color: '#0a9396',
      },
    ],
  },
  {},
  {
    featureType: 'poi.medical',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#005f73',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    elementType: 'labels',
  },
  {
    featureType: 'poi.sports_complex',
    stylers: [
      {
        color: '#0a9396',
      },
    ],
  },
  {},
  {
    featureType: 'poi.government',
    stylers: [
      {
        color: '#0a9396',
      },
    ],
  },
  {
    featureType: 'transit.station',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.line',
    stylers: [
      {
        color: '#0a9396',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [],
  },
  {},
  {},
  {},
];

export { mapStyle };
export default mapStyle;
