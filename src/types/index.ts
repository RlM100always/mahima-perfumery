export interface Product {
  id: string;
  name?: string;
  category?: 'wholesale' | 'retail' | 'package';
  gender?: 'men' | 'women';
  price?: string |number;
  originalPrice?: string |number;
  ml?: string |number;
  color?: string;
  images?: string[];
  video?: string;
  videoType?: 'youtube' | 'facebook' | 'direct';
  description: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity?: string |number;
}

export interface Review {
  id: string;
  name?: string;
  rating?: string |number;
  comment?: string;
  date?: string;
  verified?: boolean;
  source?: 'whatsapp' | 'facebook' | 'google';
  images?: string[];
  productName?: string;
  location?: string;
}