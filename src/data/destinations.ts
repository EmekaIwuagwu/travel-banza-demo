export interface Destination {
  id: string
  name: string
  country: string
  category: 'Beach' | 'Mountain' | 'City' | 'Historical' | 'Adventure'
  price: number
  rating: number
  image: string
  description: string
  shortDescription: string
  highlights: string[]
  activities: string[]
  bestTimeToVisit: string
  duration: string
  groupSize: string
}

export const destinations: Destination[] = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    category: 'City',
    price: 150,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    description: 'Experience the City of Light with its iconic landmarks, world-class museums, and romantic atmosphere.',
    shortDescription: 'The romantic capital of France with iconic landmarks and world-class culture.',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Champs-Élysées', 'Notre-Dame Cathedral'],
    activities: ['Museum visits', 'River cruises', 'Shopping', 'Café culture'],
    bestTimeToVisit: 'April to June, October to November',
    duration: '3-5 days',
    groupSize: '2-4 people'
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    category: 'Beach',
    price: 80,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
    description: 'Discover tropical paradise with stunning beaches, lush rice terraces, and vibrant culture.',
    shortDescription: 'Tropical paradise with stunning beaches and vibrant Balinese culture.',
    highlights: ['Ubud Monkey Forest', 'Tegallalang Rice Terraces', 'Uluwatu Temple', 'Seminyak Beach'],
    activities: ['Surfing', 'Yoga retreats', 'Temple visits', 'Water sports'],
    bestTimeToVisit: 'April to September',
    duration: '5-7 days',
    groupSize: '2-6 people'
  },
  {
    id: 'new-york',
    name: 'New York City',
    country: 'USA',
    category: 'City',
    price: 200,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?q=80&w=2070&auto=format&fit=crop',
    description: 'Explore the Big Apple with its skyscrapers, Broadway shows, and diverse neighborhoods.',
    shortDescription: 'The ultimate urban experience with skyscrapers, Broadway, and endless energy.',
    highlights: ['Times Square', 'Central Park', 'Statue of Liberty', 'Brooklyn Bridge'],
    activities: ['Broadway shows', 'Museum tours', 'Shopping', 'Dining experiences'],
    bestTimeToVisit: 'April to June, September to November',
    duration: '4-6 days',
    groupSize: '2-5 people'
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    category: 'Beach',
    price: 180,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    description: 'Witness breathtaking sunsets and white-washed buildings perched on volcanic cliffs.',
    shortDescription: 'Iconic Greek island with white-washed buildings and stunning sunsets.',
    highlights: ['Oia Sunset', 'Fira Town', 'Red Beach', 'Akrotiri Ancient City'],
    activities: ['Sunset viewing', 'Wine tasting', 'Beach visits', 'Boat tours'],
    bestTimeToVisit: 'May to October',
    duration: '3-5 days',
    groupSize: '2-4 people'
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    category: 'Historical',
    price: 120,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2070&auto=format&fit=crop',
    description: 'Immerse yourself in traditional Japan with ancient temples, gardens, and geisha culture.',
    shortDescription: 'Ancient capital with traditional temples, gardens, and geisha culture.',
    highlights: ['Fushimi Inari Shrine', 'Kinkaku-ji Temple', 'Arashiyama Bamboo Grove', 'Gion District'],
    activities: ['Temple visits', 'Tea ceremonies', 'Garden tours', 'Cultural experiences'],
    bestTimeToVisit: 'March to May, October to November',
    duration: '4-6 days',
    groupSize: '2-4 people'
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Peru',
    category: 'Historical',
    price: 250,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
    description: 'Explore the ancient Incan citadel surrounded by breathtaking mountain scenery.',
    shortDescription: 'Ancient Incan citadel surrounded by breathtaking Andean mountains.',
    highlights: ['Machu Picchu Citadel', 'Huayna Picchu', 'Sun Gate', 'Intihuatana Stone'],
    activities: ['Hiking', 'Archaeological tours', 'Photography', 'Cultural exploration'],
    bestTimeToVisit: 'May to September',
    duration: '5-7 days',
    groupSize: '2-6 people'
  },
  {
    id: 'zermatt',
    name: 'Zermatt',
    country: 'Switzerland',
    category: 'Mountain',
    price: 220,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
    description: 'Experience world-class skiing and stunning Alpine scenery in this car-free village.',
    shortDescription: 'Car-free Alpine village with world-class skiing and stunning mountain views.',
    highlights: ['Matterhorn', 'Skiing & Snowboarding', 'Gornergrat Railway', 'Sunnegga Paradise'],
    activities: ['Skiing', 'Hiking', 'Mountain railways', 'Alpine dining'],
    bestTimeToVisit: 'December to April, June to September',
    duration: '4-7 days',
    groupSize: '2-8 people'
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    category: 'Adventure',
    price: 140,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop',
    description: 'Discover dramatic landscapes, wildlife encounters, and vibrant culture at the tip of Africa.',
    shortDescription: 'Stunning coastal city with Table Mountain and incredible biodiversity.',
    highlights: ['Table Mountain', 'Cape of Good Hope', 'Robben Island', 'Boulders Beach'],
    activities: ['Hiking', 'Wildlife safaris', 'Wine tours', 'Beach activities'],
    bestTimeToVisit: 'November to March',
    duration: '5-8 days',
    groupSize: '2-6 people'
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    category: 'City',
    price: 160,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
    description: 'Enjoy harbor views, iconic architecture, and laid-back beach culture in Australia\'s largest city.',
    shortDescription: 'Harbor city with iconic Opera House and vibrant beach culture.',
    highlights: ['Sydney Opera House', 'Sydney Harbour Bridge', 'Bondi Beach', 'Royal Botanic Garden'],
    activities: ['Harbor cruises', 'Beach visits', 'City tours', 'Cultural experiences'],
    bestTimeToVisit: 'September to November, March to May',
    duration: '4-6 days',
    groupSize: '2-5 people'
  }
]

export const categories = [
  { name: 'Beach', icon: '🏖️', color: 'from-blue-500 to-cyan-500' },
  { name: 'Mountain', icon: '🏔️', color: 'from-green-500 to-emerald-500' },
  { name: 'City', icon: '🏙️', color: 'from-purple-500 to-pink-500' },
  { name: 'Historical', icon: '🏛️', color: 'from-amber-500 to-orange-500' },
  { name: 'Adventure', icon: '⛰️', color: 'from-red-500 to-rose-500' }
]
