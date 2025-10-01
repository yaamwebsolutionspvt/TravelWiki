const ct1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514604/travelwiki/assets/CulturalTours/ct1.jpg";
const ct2 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514607/travelwiki/assets/CulturalTours/ct2.png";
const ct3 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514608/travelwiki/assets/CulturalTours/ct3.png";
const ct4 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514610/travelwiki/assets/CulturalTours/ct4.png";
const ct5 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514612/travelwiki/assets/CulturalTours/ct5.jpg";

export const culturalPackages = [
  {
    title: "Gurez Valley Tour",
    duration: "3N/4D",
    flights: 0,
    hotels: 3,
    activities: 5,
    transfers: 4,
    places: ["1N Srinagar", "2N Gurez"],
    highlights: [
      "01 Hr Shikara Ride", 
      "Tour of Tuleil Valley",
      "Authentic Dard culture experience"
    ],
    price: 14999,
    originalPrice: 17999,
    updatedDate: "30 July 2025",
    image: ct5,
    link: "/packages/gurez-valley-tour",
  },
  {
    title: "Kashmir With Gurez Valley Tour",
    duration: "5N/6D",
    flights: 0,
    hotels: 5,
    activities: 10,
    transfers: 6,
    places: ["2N Srinagar", "2N Gurez", "1N Srinagar"],
    highlights: [
      "01 Hr Shikara Ride", 
      "Indian traditional lunch",
      "Heritage & Dard culture fusion"
    ],
    price: 19999,
    originalPrice: 23999,
    updatedDate: "30 July 2025",
    image: ct1,
    link: "/packages/kashmir-with-gurez-valley-tour",
  },
  {
    title: "Kashmir Offbeat With Gurez",
    duration: "7N/8D",
    flights: 0,
    hotels: 7,
    activities: 12,
    transfers: 8,
    places: ["4N Srinagar", "2N Gurez", "1N Srinagar"],
    highlights: [
      "01 Hr Shikara Ride", 
      "Indian traditional lunch",
      "Hidden cultural treasures exploration"
    ],
    price: 26999,
    originalPrice: 32399,
    updatedDate: "30 July 2025",
    image: ct2,
    link: "/packages/kashmir-offbeat-with-gurez",
  },
  {
    title: "True Gems Of Kashmir Valley",
    duration: "8N/9D",
    flights: 0,
    hotels: 8,
    activities: 14,
    transfers: 9,
    places: ["4N Srinagar", "2N Gurez", "2N Srinagar"],
    highlights: [
      "01 Hr Shikara Ride", 
      "Indian traditional lunch",
      "Ultimate cultural gems experience"
    ],
    price: 31999,
    originalPrice: 38399,
    updatedDate: "30 July 2025",
    image: ct3,
    link: "/packages/true-gems-of-kashmir-valley",
  },
  {
    title: "Kashmir With Kargil",
    duration: "6N/7D",
    flights: 0,
    hotels: 6,
    activities: 14,
    transfers: 7,
    places: [
      "2N Srinagar",
      "1N Kargil",
      "1N Sonmarg",
      "1N Gulmarg",
      "1N Srinagar",
    ],
    highlights: [
      "01 Hr Shikara Ride", 
      "Indian traditional lunch",
      "Multi-cultural diversity experience"
    ],
    price: 22999,
    originalPrice: 27599,
    updatedDate: "30 July 2025",
    image: ct4,
    link: "/packages/kashmir-with-kargil",
  },
];

export const culturalContent = {
  title: "Kashmir Cultural Tours and Packages",
  subtitle: "Kashmir's rich cultural tapestry is threaded with years-old traditions, diverse heritage, spiritualism, and vibrant festivals. It reflects the influences of various cultures that existed in this land for centuries. Every aspect of Kashmiri culture leaves an everlasting impact, and to make this experience palatable, Kashmir Cultural Packages provide the right ways and strategic planning to soak it all in.",
  sectionBgColor: "bg-white",
  textColor: "text-black",
  expandedContent: {
    intro: "Whether you wish to explore the local culture, visit religious sites, learn about the local way of life, or learn about Kashmiri cuisine, these packages let you take a deep dive into the beautiful culture of Kashmir.",
    tableTitle: "Under Kashmir cultural tours you can cover:",
    culturalTable: {
      headers: ["Religious Sites", "Places to Shop", "Festivals of Kashmir"],
      rows: [
        ["Shankaracharya temple", "Zaina Kadal Road", "Hemis Festival"],
        ["Amarnath Cave", "Lal Chowk", "Eid"],
        ["Charar-e-Sharief", "Residency Road", "Tulip Festival"],
        ["Ziarat Dastgir Sahib", "Floating Vegetable Market", "Shikara Festival"],
        ["Martand Sun temple", "Kashmir Govt Arts Emporium", "Gurez Festival"]
      ]
    }
  }
};