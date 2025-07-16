// dummyData.js

// Categories
const categories = [
  { id: "1", name: "Plumbing", icon: "water" },
  { id: "2", name: "Painting", icon: "color-palette" },
  { id: "3", name: "Electrician", icon: "flash" },
  { id: "4", name: "AC Repair", icon: "snow" },
  { id: "5", name: "Makeup", icon: "brush" },
  { id: "6", name: "Cleaning", icon: "broom" },
  { id: "7", name: "Gardening", icon: "leaf" },
  { id: "8", name: "Carpentry", icon: "construct" },
];

// Top Services
const topServices = [
  {
    id: "1",
    title: "Pipe Fitting",
    rating: 4.9,
    reviews: 250,
    price: "$50",
    category: "Plumbing",
    image: "https://via.placeholder.com/150/87CEEB/000?text=Pipe+Fitting",
  },
  {
    id: "2",
    title: "Wall Painting",
    rating: 4.7,
    reviews: 180,
    price: "$35",
    category: "Painting",
    image: "https://via.placeholder.com/150/FFD700/000?text=Painting",
  },
  {
    id: "3",
    title: "Switch Installation",
    rating: 4.8,
    reviews: 120,
    price: "$70",
    category: "Electrician",
    image: "https://via.placeholder.com/150/FFA500/000?text=Electrician",
  },
  {
    id: "4",
    title: "AC Gas Refill",
    rating: 4.9,
    reviews: 90,
    price: "$45",
    category: "AC Repair",
    image: "https://via.placeholder.com/150/00CED1/000?text=AC+Refill",
  },
  {
    id: "5",
    title: "Drainage Cleaning",
    rating: 4.7,
    reviews: 210,
    price: "$60",
    category: "Plumbing",
    image: "https://via.placeholder.com/150/4169E1/fff?text=Drain+Cleaning",
  },
  {
    id: "6",
    title: "Bridal Makeup",
    rating: 5.0,
    reviews: 300,
    price: "$85",
    category: "Makeup",
    image: "https://via.placeholder.com/150/FF69B4/000?text=Makeup",
  },
  {
    id: "7",
    title: "Deep Home Cleaning",
    rating: 4.6,
    reviews: 170,
    price: "$55",
    category: "Cleaning",
    image: "https://via.placeholder.com/150/8FBC8F/000?text=Cleaning",
  },
  {
    id: "8",
    title: "Lawn Mowing",
    rating: 4.5,
    reviews: 95,
    price: "$40",
    category: "Gardening",
    image: "https://via.placeholder.com/150/228B22/fff?text=Gardening",
  },
  {
    id: "9",
    title: "Cabinet Installation",
    rating: 4.8,
    reviews: 110,
    price: "$90",
    category: "Carpentry",
    image: "https://via.placeholder.com/150/A0522D/fff?text=Carpentry",
  },
];
// Recent Searches
export const searchRecent = [
  "Plumbing",
  "Makeup",
  "Electrician",
  "Painting",
  "Cleaning",
  "AC Repair",
];

// Search Results
export const searchResults = [
  {
    id: "201",
    name: "Car Wash",
    rating: 4.8,
    icon: "car",
  },
  {
    id: "202",
    name: "Hair Stylist",
    rating: 4.9,
    icon: "person",
  },
  {
    id: "203",
    name: "Pet Grooming",
    rating: 4.7,
    icon: "paw",
  },
  {
    id: "204",
    name: "Gardening",
    rating: 4.6,
    icon: "leaf",
  },
  {
    id: "205",
    name: "House Maid",
    rating: 4.5,
    icon: "home",
  },
  {
    id: "206",
    name: "AC Repair",
    rating: 4.4,
    icon: "snow",
  },
];

// Bookings
export const userBookings = [
  {
    id: "b1",
    service: "Plumbing Repair",
    provider: "John Doe",
    date: "Thu, Oct 26, 2023",
    time: "10:00 AM",
    status: "Confirmed",
    address: "123 Main St, Cityville",
  },
  {
    id: "b2",
    service: "Makeup Session",
    provider: "Jane Smith",
    date: "Fri, Oct 27, 2023",
    time: "02:00 PM",
    status: "Confirmed",
    address: "456 Oak Ave, Townsville",
  },
  {
    id: "b3",
    service: "Electrical Wiring",
    provider: "Mike Johnson",
    date: "Sat, Oct 28, 2023",
    time: "09:00 AM",
    status: "In Progress",
    address: "789 Pine Ln, Villageton",
  },
  {
    id: "b4",
    service: "House Painting",
    provider: "Sarah Davis",
    date: "Mon, Oct 22, 2023",
    time: "01:00 PM",
    status: "Completed",
    address: "101 Elm Rd, Hamlet",
  },
  {
    id: "b5",
    service: "Car Detailing",
    provider: "Auto Spa",
    date: "Tue, Oct 23, 2023",
    time: "11:00 AM",
    status: "Cancelled",
    address: "202 Garage St, Metropolis",
  },
];

// Provider Info for BookNow/Profile
export const selectedProvider = {
  id: "p1",
  name: "Riya Sharma",
  profession: "Makeup Artist",
  location: "New York City",
  rating: 4.9,
  reviews: 124,
  about:
    "Experienced and passionate makeup artist specializing in bridal, red-carpet, and editorial looks.",
  services: [
    { name: "Full Face Makeup", price: 80, duration: "60 mins" },
    { name: "Bridal Makeup", price: 100, duration: "90 mins" },
    { name: "EyeLash Application", price: 15, duration: "15 mins" },
  ],
  availability: {
    weekdays: "Mon-Fri: 9:00 AM - 5:00 PM",
    weekends: "Sat-Sun: 10:00 AM - 4:00 PM",
  },
  reviews: [
    {
      user: "Sara L.",
      comment:
        "Amazing work! Riya made me feel beautiful for my wedding day. Highly recommend!",
    },
    {
      user: "Emily P.",
      comment: "Professional and friendly. Loved my look for the party.",
    },
    {
      user: "Jessica M.",
      comment: "Great attention to detail, very happy with the results.",
    },
  ],
};
