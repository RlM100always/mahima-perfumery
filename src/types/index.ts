export interface Product {
  id: string;
  name: string;
  category: 'wholesale' | 'retail' | 'package';
  gender: 'men' | 'women';
  price: number;
  originalPrice?: number;
  ml: number;
  color: string;
  images: string[];
  video?: string;
  videoType?: 'youtube' | 'facebook' | 'direct';
  description: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  source?: 'whatsapp' | 'facebook' | 'google';
  images?: string[];
  productName?: string;
  location?: string;
}