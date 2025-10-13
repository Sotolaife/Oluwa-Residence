import type { Property, Agent, Testimonial, Post, FAQ } from './types';
import { placeholderData } from './placeholder-images';

function getImage(id: string) {
    const img = placeholderData.find(p => p.id === id);
    if (!img) {
        return { url: 'https://picsum.photos/seed/fallback/800/600', alt: 'Placeholder', hint: 'placeholder' };
    }
    return { url: img.imageUrl, alt: img.description, hint: img.imageHint };
}

function getImageUrl(id: string): string {
    return placeholderData.find(p => p.id === id)?.imageUrl ?? 'https://picsum.photos/seed/fallback/800/600';
}


export const agents: Agent[] = [
    {
      id: 'agent-1',
      name: 'Adanna Chi',
      title: 'Lead Realtor',
      phone: '+2348012345678',
      email: 'adanna.c@oluwadara.com',
      avatarUrl: getImageUrl('agent1'),
    },
    {
      id: 'agent-2',
      name: 'Boluwatife Ade',
      title: 'Senior Partner',
      phone: '+2349087654321',
      email: 'bolu.a@oluwadara.com',
      avatarUrl: getImageUrl('agent2'),
    },
];

export const properties: Property[] = [
  {
    id: 'prop-1',
    title: 'Modern Villa with Ocean View',
    description: 'A stunning modern villa located in the serene neighborhood of Ikoyi. Offers breathtaking ocean views and state-of-the-art facilities. Perfect for a family seeking luxury and tranquility.',
    price: 4500000,
    location: 'Ikoyi, Lagos',
    address: '123 Ocean Drive, Ikoyi, Lagos',
    bedrooms: 5,
    bathrooms: 6,
    area: 7500,
    type: 'Villa',
    isFeatured: true,
    amenities: ['Swimming Pool', 'Gym', 'Ocean View', '24/7 Security', 'Home Cinema'],
    images: [
        getImage('property1-1'),
        getImage('property1-2'),
        getImage('property1-3'),
    ],
    agent: agents[0],
    status: 'For Sale',
    yearBuilt: 2022,
    lat: 6.4474,
    lng: 3.4245,
  },
  {
    id: 'prop-2',
    title: 'Luxury Penthouse in Victoria Island',
    description: 'Experience city living at its finest in this luxurious penthouse. With panoramic views of the city skyline and premium interior finishes, this property is the epitome of urban elegance.',
    price: 2800000,
    location: 'Victoria Island, Lagos',
    address: '456 Skyline Ave, Victoria Island, Lagos',
    bedrooms: 3,
    bathrooms: 4,
    area: 4200,
    type: 'Penthouse',
    isFeatured: true,
    amenities: ['Rooftop Terrace', 'Concierge Service', 'Smart Home System', 'City View'],
    images: [
        getImage('property2-1'),
        getImage('property2-2'),
    ],
    agent: agents[1],
    status: 'For Sale',
    yearBuilt: 2020,
    lat: 6.4296,
    lng: 3.4233,
  },
  {
    id: 'prop-3',
    title: 'Cozy Family Home in Lekki',
    description: 'A charming and spacious family home situated in a gated community in Lekki. Features a private garden and ample living space for a growing family.',
    price: 1500000,
    location: 'Lekki, Lagos',
    address: '789 Serenity Close, Lekki, Lagos',
    bedrooms: 4,
    bathrooms: 4,
    area: 5000,
    type: 'House',
    isFeatured: true,
    amenities: ['Private Garden', 'Gated Community', 'Play Area', 'Fitted Kitchen'],
    images: [
        getImage('property3-1'),
    ],
    agent: agents[0],
    status: 'For Sale',
    yearBuilt: 2018,
    lat: 6.4589,
    lng: 3.5917,
  }
];

export const testimonials: Testimonial[] = [
    {
        id: 'test-1',
        name: 'The Okoro Family',
        location: 'Ikoyi, Lagos',
        quote: 'Oluwadara Residences made our dream of a perfect family home come true. The process was seamless, and their attention to detail is unmatched. We couldn\'t be happier!',
        rating: 5,
        avatarUrl: getImageUrl('testimonial1'),
    },
    {
        id: 'test-2',
        name: 'Mr. David Smith',
        location: 'Victoria Island, Lagos',
        quote: 'As an expatriate, finding a home in a new country was daunting. The team\'s professionalism and deep market knowledge were invaluable. Found an amazing penthouse!',
        rating: 5,
        avatarUrl: getImageUrl('testimonial2'),
    },
    {
        id: 'test-3',
        name: 'Mrs. Aisha Bello',
        location: 'Lekki, Lagos',
        quote: 'From the first call to getting our keys, the experience was first-class. They listened to our needs and found a property that exceeded our expectations.',
        rating: 5,
        avatarUrl: getImageUrl('testimonial3'),
    }
];

export const posts: Post[] = [
    {
        id: 'post-1',
        slug: 'top-5-interior-design-trends-2024',
        title: 'Top 5 Interior Design Trends for Luxury Homes in 2024',
        summary: 'Discover the latest trends in luxury interior design that are shaping the most beautiful homes this year. From sustainable materials to smart home integration, get inspired to create your own lavish living space.',
        content: '## 1. Biophilic Design\n\nNature-inspired design continues to dominate the luxury market. This trend is about creating a connection between the indoor environment and the natural world. Think large windows for natural light, indoor plants, natural materials like wood and stone, and color palettes that mimic nature.\n\n### Key Elements:\n- Living walls and vertical gardens\n- Natural materials: wood, stone, bamboo, and rattan\n- Water features\n- Abundant natural light',
        author: agents[1],
        publishedAt: '2024-05-15T10:00:00Z',
        tags: ['Interior Design', 'Luxury Living', 'Trends'],
        imageUrl: getImageUrl('blog1'),
    },
    {
        id: 'post-2',
        slug: 'investment-guide-lagos-real-estate',
        title: 'An Investor\'s Guide to the Lagos Real Estate Market',
        summary: 'Lagos is a booming metropolis with a dynamic real estate market. In this guide, we break down the key areas for investment, potential returns, and what to look out for when buying property in Nigeria\'s economic hub.',
        content: '## Understanding the Market\n\nThe Lagos real estate market is characterized by high demand and rapid development. Key areas like Ikoyi, Victoria Island, and Lekki continue to be hotspots for luxury properties, offering significant potential for capital appreciation and rental income.\n\n### Investment Hotspots:\n- **Ikoyi:** Known for its super-luxury properties and high-net-worth residents.\n- **Victoria Island:** The commercial hub, offering a mix of residential and commercial properties.\n- **Lekki:** A rapidly growing area with a wide range of property types, from affordable luxury to high-end estates.',
        author: agents[0],
        publishedAt: '2024-04-28T14:30:00Z',
        tags: ['Investment', 'Real Estate', 'Lagos'],
        imageUrl: getImageUrl('blog2'),
    }
];

export const faqs: FAQ[] = [
    {
        id: 'faq-1',
        question: 'What types of properties do you deal with?',
        answer: 'We specialize in luxury residential properties including single-family homes, villas, penthouses, and high-end apartments in prime locations such as Ikoyi, Victoria Island, and Lekki.'
    },
    {
        id: 'faq-2',
        question: 'Do you offer property management services?',
        answer: 'Yes, we offer a comprehensive property management service for homeowners and investors, ensuring your asset is well-maintained and generates optimal returns. Our services include tenant screening, rent collection, maintenance, and financial reporting.'
    },
    {
        id: 'faq-3',
        question: 'How do I schedule a viewing?',
        answer: 'You can schedule a viewing by clicking the "Schedule a Viewing" or "Request Viewing" button on any property page, or by contacting us directly via phone, email, or WhatsApp. Our agents will be happy to arrange a time that is convenient for you.'
    },
    {
        id: 'faq-4',
        question: 'What is the buying process like?',
        answer: 'Our process is designed to be seamless and transparent. It typically involves an initial consultation to understand your needs, curated property viewings, making an offer, conducting due diligence and legal checks with our trusted partners, and finally, the smooth transfer of ownership. Our team will guide you through every step.'
    }
];

export const placeholderImages = placeholderData.reduce((acc, img) => {
    acc[img.id] = {
        imageUrl: img.imageUrl,
        description: img.description,
        imageHint: img.imageHint,
    };
    return acc;
}, {} as Record<string, { imageUrl: string; description: string; imageHint: string }>);
