export const categories = [
  {
    id: 1,
    name: 'Vegetables',
    emoji: '🥦',
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    itemCount: 156,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&q=80'
  },
  {
    id: 2,
    name: 'Fruits',
    emoji: '🍎',
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-50',
    itemCount: 89,
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&q=80'
  },
  {
    id: 3,
    name: 'Dairy',
    emoji: '🥛',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    itemCount: 67,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&q=80'
  },
  {
    id: 4,
    name: 'Snacks',
    emoji: '🍪',
    color: 'from-amber-400 to-amber-600',
    bgColor: 'bg-amber-50',
    itemCount: 234,
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=200&q=80'
  },
  {
    id: 5,
    name: 'Beverages',
    emoji: '🧃',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    itemCount: 112,
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=200&q=80'
  },
  {
    id: 6,
    name: 'Bakery',
    emoji: '🥐',
    color: 'from-yellow-400 to-yellow-600',
    bgColor: 'bg-yellow-50',
    itemCount: 45,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&q=80'
  },
  {
    id: 7,
    name: 'Meat',
    emoji: '🥩',
    color: 'from-rose-400 to-rose-600',
    bgColor: 'bg-rose-50',
    itemCount: 78,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&q=80'
  },
  {
    id: 8,
    name: 'Frozen',
    emoji: '🧊',
    color: 'from-cyan-400 to-cyan-600',
    bgColor: 'bg-cyan-50',
    itemCount: 93,
    image: 'https://images.unsplash.com/photo-1631209093584-9e5b5d2d8b6d?w=200&q=80'
  }
];

export const products = [
  {
    id: 1,
    name: 'Fresh Organic Bananas',
    quantity: '1 dozen',
    price: 49,
    originalPrice: 65,
    discount: 25,
    rating: 4.5,
    reviews: 234,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80',
    isNew: false,
    inStock: true
  },
  {
    id: 2,
    name: 'Farm Fresh Milk',
    quantity: '1 Litre',
    price: 58,
    originalPrice: 62,
    discount: 6,
    rating: 4.8,
    reviews: 567,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
    isNew: false,
    inStock: true
  },
  {
    id: 3,
    name: 'Organic Broccoli',
    quantity: '500g',
    price: 89,
    originalPrice: 120,
    discount: 26,
    rating: 4.3,
    reviews: 189,
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80',
    isNew: true,
    inStock: true
  },
  {
    id: 4,
    name: 'Premium Almonds',
    quantity: '250g',
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.7,
    reviews: 892,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&q=80',
    isNew: false,
    inStock: true
  },
  {
    id: 5,
    name: 'Avocado (Hass)',
    quantity: '2 pcs',
    price: 179,
    originalPrice: 220,
    discount: 19,
    rating: 4.6,
    reviews: 345,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80',
    isNew: true,
    inStock: true
  },
  {
    id: 6,
    name: 'Greek Yogurt',
    quantity: '400g',
    price: 149,
    originalPrice: 180,
    discount: 17,
    rating: 4.4,
    reviews: 412,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
    isNew: false,
    inStock: true
  },
  {
    id: 7,
    name: 'Fresh Orange Juice',
    quantity: '1 Litre',
    price: 129,
    originalPrice: 159,
    discount: 19,
    rating: 4.5,
    reviews: 278,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80',
    isNew: false,
    inStock: true
  },
  {
    id: 8,
    name: 'Multigrain Bread',
    quantity: '400g',
    price: 55,
    originalPrice: 65,
    discount: 15,
    rating: 4.2,
    reviews: 156,
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
    isNew: false,
    inStock: true
  },
  {
    id: 9,
    name: 'Cherry Tomatoes',
    quantity: '250g',
    price: 79,
    originalPrice: 99,
    discount: 20,
    rating: 4.6,
    reviews: 203,
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcabd337?w=400&q=80',
    isNew: false,
    inStock: true
  },
  {
    id: 10,
    name: 'Dark Chocolate',
    quantity: '100g',
    price: 159,
    originalPrice: 199,
    discount: 20,
    rating: 4.8,
    reviews: 567,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&q=80',
    isNew: true,
    inStock: true
  },
  {
    id: 11,
    name: 'Fresh Strawberries',
    quantity: '200g',
    price: 199,
    originalPrice: 249,
    discount: 20,
    rating: 4.7,
    reviews: 389,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&q=80',
    isNew: false,
    inStock: true
  },
  {
    id: 12,
    name: 'Paneer (Cottage Cheese)',
    quantity: '200g',
    price: 89,
    originalPrice: 110,
    discount: 19,
    rating: 4.5,
    reviews: 445,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80',
    isNew: false,
    inStock: true
  }
];

export const offers = [
  {
    id: 1,
    title: 'Fresh Vegetables',
    subtitle: 'Up to 40% OFF',
    description: 'Farm fresh veggies delivered daily',
    bgGradient: 'from-green-400 via-green-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80',
    code: 'FRESH40'
  },
  {
    id: 2,
    title: 'Dairy Delights',
    subtitle: 'Buy 2 Get 1 Free',
    description: 'Premium dairy products',
    bgGradient: 'from-blue-400 via-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80',
    code: 'DAIRY3'
  },
  {
    id: 3,
    title: 'Fruits Festival',
    subtitle: 'Flat 30% OFF',
    description: 'Exotic fruits at best prices',
    bgGradient: 'from-orange-400 via-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&q=80',
    code: 'FRUITS30'
  },
  {
    id: 4,
    title: 'Snack Attack',
    subtitle: 'Extra 20% OFF',
    description: 'On orders above ₹500',
    bgGradient: 'from-purple-400 via-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&q=80',
    code: 'SNACK20'
  }
];

export const deliveryLocations = [
  'Mumbai, Maharashtra',
  'Delhi NCR',
  'Bangalore, Karnataka',
  'Hyderabad, Telangana',
  'Chennai, Tamil Nadu',
  'Kolkata, West Bengal',
  'Pune, Maharashtra',
  'Ahmedabad, Gujarat'
];
