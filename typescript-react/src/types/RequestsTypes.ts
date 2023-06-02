import { FormState } from './FormTypes';
import { ListingPriceHistory } from './ListingsTypes';

export type GetListingsResponse = Promise<FormState[]>;

export type GetListingByIdResponse = Promise<ListingPriceHistory[]>;

export type CreateListingPayload = FormState;
export type CreateListingResponse = Promise<FormState>;
