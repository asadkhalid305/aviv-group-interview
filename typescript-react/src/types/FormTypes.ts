export type PostalAddress = {
  city: string;
  country: string;
  postal_code: string;
  street_address: string;
};

export type FormState = {
  bedrooms_count: number;
  building_type: string;
  contact_phone_number: string;
  created_date?: string;
  description: string;
  id?: number;
  latest_price_eur: number;
  updated_date?: string;
  name: string;
  postal_address: PostalAddress;
  rooms_count: number;
  surface_area_m2: number;
};

export type FormAction =
  | { type: 'CHANGE'; field: keyof FormState; value: string | number }
  | { type: 'RESET' };
