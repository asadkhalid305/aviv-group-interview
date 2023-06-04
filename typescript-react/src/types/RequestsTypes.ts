import { FormState } from './FormTypes';
import { PriceHistory } from './PriceHistoryTypes';

export type GetListingsResponse = Promise<FormState[]>;

export type GetListingByIdResponse = Promise<PriceHistory[]>;

export type CreateListingPayload = FormState;
export type CreateListingResponse = Promise<FormState>;
