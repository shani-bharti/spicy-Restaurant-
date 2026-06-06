import { MenuItem, FeatureItem, GalleryItem, ReviewItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'ch-dum-biryani',
    name: 'Chicken Dum Biryani',
    teluguName: 'చికెన్ దమ్ బిర్యానీ',
    description: 'World-famous authentic Hyderabadi basmati rice cooked on dum with tender, marinated chicken, saffron, and premium ghee.',
    price: 320,
    category: 'biryani',
    image: '/images/spicy_biryani_1780729750320.png',
    spicyLevel: 3,
    isVeg: false,
    isPopular: true,
    rating: 4.9
  },
  {
    id: 'sp-ch-biryani',
    name: 'Special Chicken Biryani',
    teluguName: 'స్పెషల్ చికెన్ బిర్యానీ',
    description: 'A rich and lavish variant of our biryani topped with boneless juicy chicken chunks and a special blend of warm spices.',
    price: 360,
    category: 'biryani',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop',
    spicyLevel: 2,
    isVeg: false,
    isPopular: true,
    rating: 4.8
  },
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani',
    teluguName: 'మటన్ బిర్యానీ',
    description: 'Layered rice dish with tender baby goat meat, slow-dum infused with spices, fried onions, and cardamom.',
    price: 390,
    category: 'biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop',
    spicyLevel: 3,
    isVeg: false,
    isPopular: true,
    rating: 4.9
  },
  {
    id: 'kaju-biryani',
    name: 'Kaju Biryani',
    teluguName: 'కాజు బిర్యానీ',
    description: 'A fragrant rice masterpiece for vegetarians loaded with roasted cashew nuts, whole aromatic spices, and garden-fresh vegetables.',
    price: 310,
    category: 'biryani',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop',
    spicyLevel: 1,
    isVeg: true,
    isPopular: false,
    rating: 4.6
  },
  {
    id: 'tandoori-platter',
    name: 'Spicy Tandoori Platter',
    teluguName: 'స్పైసి తందూరి ప్లాటర్',
    description: 'An assortment of tandoori chicken, paneer tikka, and sheekh kebab grill cooked in our clay oven, served with mint raita.',
    price: 450,
    category: 'starters',
    image: '/images/tandoori_platter_1780729786173.png',
    spicyLevel: 3,
    isVeg: false,
    isPopular: true,
    rating: 4.9
  },
  {
    id: 'paneer-tikka-masala',
    name: 'Paneer Tikka Masala',
    teluguName: 'పనీర్ టిక్కా మసాలా',
    description: 'Grilled tandoori paneer cubes simmered in a luscious, mildly spicy, orange creamy onion-tomato gravy with mixed herbs.',
    price: 280,
    category: 'main-course',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop',
    spicyLevel: 2,
    isVeg: true,
    isPopular: true,
    rating: 4.7
  },
  {
    id: 'chilli-prawns',
    name: 'Indo-Chinese Chilli Prawns',
    teluguName: 'చిల్లీ ప్రాన్స్',
    description: 'Crisp fried prawns tossed with fiery hot chilli sauce, bell peppers, spring onions, and garlic flakes.',
    price: 380,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
    spicyLevel: 3,
    isVeg: false,
    isPopular: false,
    rating: 4.5
  },
  {
    id: 'butter-naan',
    name: 'Butter Naan',
    teluguName: 'బటర్ నాన్',
    description: 'Soft and pillowy leavened flatbread freshly baked in our traditional tandoor clay oven, glazed generously with salted butter.',
    price: 50,
    category: 'rotis',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=600&auto=format&fit=crop',
    spicyLevel: 0,
    isVeg: true,
    isPopular: true,
    rating: 4.7
  },
  {
    id: 'tandoori-roti',
    name: 'Tandoori Roti',
    teluguName: 'తందూరి రోటీ',
    description: 'Traditional Punjabi whole-wheat flatbread cooked crisp against the hot inner clay walls of clay tandoor oven.',
    price: 35,
    category: 'rotis',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop',
    spicyLevel: 0,
    isVeg: true,
    isPopular: false,
    rating: 4.4
  },
  {
    id: 'double-ka-meetha',
    name: 'Double Ka Meetha',
    teluguName: 'డబుల్ కా మీఠా',
    description: 'Exquisite Hyderabadi classic bread pudding dessert infused with warm saffron-cardamom syrup, condensed milk, and nuts.',
    price: 150,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop',
    spicyLevel: 0,
    isVeg: true,
    isPopular: true,
    rating: 4.8
  },
  {
    id: 'qubaani-ka-meetha',
    name: 'Qubaani Ka Meetha',
    teluguName: 'ఖుబానీ కా మీఠా',
    description: 'Authentic Nawabi sweet preserve made of dried apricots, served chilled topped with fresh cream or vanilla ice cream.',
    price: 180,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
    spicyLevel: 0,
    isVeg: true,
    isPopular: true,
    rating: 4.9
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'auth-biryani',
    title: 'Authentic Hyderabadi Biryani',
    description: 'Slow-cooked in actual copper vessels with fine Basmati rice and our classified standard secret spices.',
    iconName: 'Flame'
  },
  {
    id: 'family-dining',
    title: 'Family-Friendly Dining',
    description: 'A highly spacious, cozy, and beautifully decorated section layout customized specifically for family gatherings.',
    iconName: 'Users'
  },
  {
    id: 'drive-through',
    title: 'Drive-Through Service',
    description: 'Perfect for travelers on Mumbai Highway. Grab steaming hot culinary delights right from the comfort of your vehicle.',
    iconName: 'Car'
  },
  {
    id: 'no-contact-delivery',
    title: 'No-Contact Delivery',
    description: 'Safety first. Experience ultra-swift door-to-door deliveries sealed to perfection to retain ultimate aroma.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'spacious-seating',
    title: 'Spacious Seating',
    description: 'With over 150 seats, multi-table layouts, AC sections, and private dining arrangements for groups and events.',
    iconName: 'LayoutGrid'
  },
  {
    id: 'affordable-pricing',
    title: 'Affordable Pricing',
    description: 'Sumptuous, grand portions and gourmet flavors served at unbeatable pocket-friendly family prices.',
    iconName: 'Utensils'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-biryani',
    url: '/images/spicy_biryani_1780729750320.png',
    caption: 'Signature Chicken Dum Biryani, fresh out of the dum handi.',
    category: 'food'
  },
  {
    id: 'g-dining-happy',
    url: '/images/family_dining_1780729766217.png',
    caption: 'Cozy and premium family dining section on the Mumbai Highway.',
    category: 'interior'
  },
  {
    id: 'g-tandoori-smoke',
    url: '/images/tandoori_platter_1780729786173.png',
    caption: 'Our tandoor grill master preparing rich succulent seekh kebabs.',
    category: 'signature'
  },
  {
    id: 'g-interior-lux',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    caption: 'Beautiful warm lights and elegant woodwork interior setup.',
    category: 'interior'
  },
  {
    id: 'g-naan-making',
    url: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=800&auto=format&fit=crop',
    caption: 'Traditional clay tandoor oven cooking artisanal breads.',
    category: 'food'
  },
  {
    id: 'g-chef-work',
    url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800&auto=format&fit=crop',
    caption: 'Highly accomplished chefs meticulously plating hot curries.',
    category: 'ambiance'
  }
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Anirudh Rao',
    rating: 5,
    comment: 'The Chicken Dum Biryani here is absolutely magical! Cooked to sheer perfection with very less oily grease but fully loaded with amazing spices. Excellent service too!',
    date: '2026-05-18',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'rev-2',
    name: 'Sravani Reddy',
    rating: 5,
    comment: 'Perfect place for a weekend dinner with family on the highway. Incredible drive-through convenience, and the staff treated us like royalty. Paneer tikka was extremely soft!',
    date: '2026-06-01',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'rev-3',
    name: 'Vikram Chawla',
    rating: 4,
    comment: 'I travel constantly on the Hyderabad-Mumbai route. Spicy Restaurant is my default, non-negotiable pitstop. Great Kaju Biryani, hot buttery tandoori rotis, and super fast service.',
    date: '2026-06-03',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'rev-4',
    name: 'Mohammed Faisal',
    rating: 5,
    comment: 'Genuine Hyderabadi flavors in Muthangi area. Authentic spices, very friendly hosts, and clean toilets which is a rare bliss on highway restaurants! Highly recommended.',
    date: '2026-06-05',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop'
  }
];
