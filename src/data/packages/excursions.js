const ex1 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514614/travelwiki/assets/Excursion/ex1.png";
const ex2 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514616/travelwiki/assets/Excursion/ex2.png";
const ex3 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514618/travelwiki/assets/Excursion/ex3.png";
const ex4 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514619/travelwiki/assets/Excursion/ex4.png";
const ex5 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514621/travelwiki/assets/Excursion/ex5.png";
const ex6 = "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514623/travelwiki/assets/Excursion/ex6.png";

export const excursionPackages = [
  {
    title: "Splendid Kashmir Package",
    duration: "7N/8D",
    flights: 0,
    hotels: 7,
    activities: 12,
    transfers: 8,
    places: ["1N Srinagar", "2N Pahalgam", "1N Srinagar", "1N Gulmarg", "1N Sonamarg", "1N Srinagar"],
    highlights: [
      "01 Hr Shikara Ride",
      "Complete Tour of Pahalgam Valley",
      "All major valley destinations covered"
    ],
    price: 25999,
    originalPrice: 31199,
    updatedDate: "30 July 2025",
    image: ex1,
    link: "/packages/splendid-kashmir-package",
  },
  {
    title: "Fun-Filled Vacation Kashmir Package",
    duration: "5N/6D",
    flights: 0,
    hotels: 5,
    activities: 12,
    transfers: 6,
    places: ["5N Srinagar"],
    highlights: [
      "01 Hr Shikara Ride",
      "Tour of Pahalgam Valley",
      "Fun-filled family activities"
    ],
    price: 17999,
    originalPrice: 21599,
    updatedDate: "30 July 2025",
    image: ex2,
    link: "/packages/fun-filled-vacation-kashmir-package",
  },
  {
    title: "Thrilling Kashmir Holiday Package",
    duration: "7N/8D",
    flights: 0,
    hotels: 7,
    activities: 12,
    transfers: 8,
    places: ["3N Srinagar", "2N Pahalgam", "1N Gulmarg", "1N Srinagar"],
    highlights: [
      "01 Hr Shikara Ride",
      "Tour of Pahalgam Valley",
      "Thrilling adventure activities"
    ],
    price: 23999,
    originalPrice: 28799,
    updatedDate: "30 July 2025",
    image: ex3,
    link: "/packages/thrilling-kashmir-holiday-package",
  },
  {
    title: "Week Long Holiday In Kashmir",
    duration: "6N/7D",
    flights: 0,
    hotels: 6,
    activities: 14,
    transfers: 7,
    places: ["2N Srinagar", "2N Pahalgam", "1N Gulmarg", "1N Srinagar"],
    highlights: [
      "01 Hr Shikara Ride",
      "Tour of Pahalgam Valley",
      "Perfect balance of activity and relaxation"
    ],
    price: 20999,
    originalPrice: 25199,
    updatedDate: "30 July 2025",
    image: ex4,
    link: "/packages/week-long-holiday-kashmir",
  },
  {
    title: "Magnificent Kashmir With Pahalgam And Gulmarg",
    duration: "6N/7D",
    flights: 0,
    hotels: 6,
    activities: 10,
    transfers: 7,
    places: ["2N Pahalgam", "1N Gulmarg", "3N Srinagar"],
    highlights: [
      "01 Hr Shikara Ride",
      "Tour of Pahalgam Valley",
      "Premium accommodation throughout"
    ],
    price: 22999,
    originalPrice: 27599,
    updatedDate: "30 July 2025",
    image: ex5,
    link: "/packages/magnificent-kashmir-pahalgam-gulmarg",
  },
  {
    title: "Srinagar Getaway Package",
    duration: "3N/4D",
    flights: 0,
    hotels: 3,
    activities: 6,
    transfers: 4,
    places: ["3N Srinagar"],
    highlights: [
      "01 Hr Shikara Ride",
      "Tour of Pahalgam Valley day trip",
      "Perfect short escape"
    ],
    price: 10999,
    originalPrice: 13199,
    updatedDate: "30 July 2025",
    image: ex6,
    link: "/packages/srinagar-getaway-package",
  }
];

export const excursionContent = {
  title: "Kashmir Excursions Special",
  subtitle: "Discover the enchanting beauty of Kashmir through our specially curated excursion packages. From thrilling adventures to peaceful getaways, experience the diverse landscapes, rich culture, and unforgettable moments that make Kashmir truly paradise on earth.",
  sectionBgColor: "bg-blue-900",
  textColor: "text-white",
  subtitleColor: "text-blue-100"
};