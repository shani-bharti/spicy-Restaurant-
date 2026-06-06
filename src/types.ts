export interface MenuItem {
  id: string;
  name: string;
  teluguName?: string;
  description: string;
  price: number;
  category: 'starters' | 'biryani' | 'main-course' | 'rotis' | 'desserts';
  image: string;
  spicyLevel: 0 | 1 | 2 | 3; // 0 = non-spicy, 3 = very spicy
  isVeg: boolean;
  isPopular?: boolean;
  rating: number;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'food' | 'interior' | 'ambiance' | 'signature';
}

export interface ReservationDetails {
  id?: string;
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  seatingArea: 'family' | 'ac-hall' | 'outdoor' | 'any';
  specialRequests?: string;
}
