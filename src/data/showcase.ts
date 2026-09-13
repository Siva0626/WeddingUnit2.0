export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: string;
};

export const galleryItems: GalleryItem[] = [
  { id: 1, src: "/assets/Photos/01.jpg", alt: "Wedding portrait", caption: "A quiet beginning", category: "WEDDINGS" },
  { id: 2, src: "/assets/Photos/02.jpg", alt: "Wedding celebration", caption: "Joy in the moment", category: "WEDDINGS" },
  { id: 3, src: "/assets/Photos/03.jpg", alt: "Wedding couple", caption: "Just the two of us", category: "ENGAGEMENTS" },
  { id: 4, src: "/assets/Photos/why-choose-us.png", alt: "Wedding ceremony", caption: "Tradition & emotion", category: "WEDDINGS" },
  { id: 5, src: "/assets/Photos/why-choose-us.png", alt: "Wedding detail", caption: "Details that matter", category: "WEDDINGS" },
  { id: 6, src: "/assets/Photos/why-choose-us.png", alt: "Couple portrait", caption: "Between the frames", category: "PRE-WEDDING" },
  { id: 7, src: "/assets/Photos/why-choose-us.png", alt: "Couple moment", caption: "A little laughter", category: "PRE-WEDDING" },
  { id: 8, src: "/assets/Photos/8.jpg", alt: "Wedding moment", caption: "Unscripted beauty", category: "WEDDINGS" },
  { id: 9, src: "/assets/Photos/why-choose-us.png", alt: "Wedding portrait", caption: "Golden hour", category: "WEDDINGS" },
  { id: 10, src: "/assets/Photos/10.jpg", alt: "Wedding scene", caption: "A memory in motion", category: "EVENTS" },
  { id: 11, src: "/assets/Photos/11.jpg", alt: "Wedding couple", caption: "Forever starts here", category: "ENGAGEMENTS" },
  { id: 12, src: "/assets/Photos/12.jpg", alt: "Wedding portrait", caption: "Softly remembered", category: "PRE-WEDDING" },
  { id: 13, src: "/assets/Photos/13.jpg", alt: "Wedding celebration", caption: "The people around you", category: "EVENTS" },
  { id: 14, src: "/assets/Photos/14.jpg", alt: "Wedding detail", caption: "Little things, big feelings", category: "WEDDINGS" },
  { id: 15, src: "/assets/Photos/15.jpg", alt: "Couple portrait", caption: "Made for each other", category: "PRE-WEDDING" },
  { id: 16, src: "/assets/Photos/16.jpg", alt: "Wedding moment", caption: "A frame worth keeping", category: "WEDDINGS" },
  { id: 17, src: "/assets/Photos/17.jpg", alt: "Wedding portrait", caption: "The look between words", category: "ENGAGEMENTS" },
  { id: 18, src: "/assets/Photos/18.jpg", alt: "Wedding celebration", caption: "Celebrate loudly", category: "EVENTS" },
];

export const storyItems = galleryItems.slice(0, 8);

export const testimonialItems = [
  {
    name: "Sangeetha & Arjun",
    role: "Wedding Couple",
    avatar: "/assets/Photos/01.jpg",
    message:
      "They captured all the little moments we completely missed on the day. Looking through the photographs felt like reliving our wedding.",
  },
  {
    name: "Priya & Karthik",
    role: "Wedding Couple",
    avatar: "/assets/Photos/02.jpg",
    message:
      "The team was calm, friendly and completely unobtrusive. The final photographs felt natural instead of staged.",
  },
  {
    name: "Megha & Vivek",
    role: "Wedding Couple",
    avatar: "/assets/Photos/03.jpg",
    message:
      "From the first conversation to the final delivery, everything was thoughtful. We would book them again without hesitation.",
  },
];

export const serviceItems = [
  "Wedding Photography",
  "Cinematography",
  "Pre-Wedding Shoots",
  "Engagements",
  "Events & Functions",
];

export const navItems = [
  ["HOME", "#hero"],
  ["WORKS", "#works"],
  ["SERVICES", "#services"],
  ["PACKAGES", "#packages"],
  ["TESTIMONIALS", "#testimonials"],
  ["CONTACT", "#contact"],
] as const;


