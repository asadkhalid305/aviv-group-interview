import { Dispatch, SetStateAction } from 'react';

export type Listings = {
  setFetch: Dispatch<SetStateAction<boolean>>;
};

export type ListingPriceHistory = {
  created_date: string;
  price_eur: number;
};
