export interface ServiceItem {
  id: string;
  name: string;
  duration?: string;
  price?: string | number;
  description?: string;
  popular?: boolean;
  unavailable?: boolean;
  category: 'makeup' | 'skin-classic' | 'skin-advanced' | 'hair' | 'addon';
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  details: string;
  preferredDate?: string;
  preferredTime?: string;
  isMobileService?: boolean;
  selectedAddons?: string[];
}

export interface Product3D {
  id: string;
  name: string;
  tagline: string;
  type: 'serum' | 'cream' | 'device';
  volume: string;
  price: string;
  accentColor: string;
  description: string;
  keyIngredients: string[];
  clinicalBenefits: string[];
  usage: string;
}
