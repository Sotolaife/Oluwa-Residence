export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  type: 'House' | 'Apartment' | 'Villa' | 'Penthouse';
  isFeatured: boolean;
  amenities: string[];
  images: { url: string; alt: string; hint: string }[];
  agent: Agent;
  status: 'For Sale' | 'For Rent' | 'Sold';
  yearBuilt: number;
  lat: number;
  lng: number;
};

export type Agent = {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  avatarUrl: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatarUrl: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string; // markdown content
  author: Agent;
  publishedAt: string; // ISO date string
  tags: string[];
  imageUrl: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};
