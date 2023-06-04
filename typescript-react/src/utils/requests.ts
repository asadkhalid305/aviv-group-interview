import axios from 'axios';

import {
  CreateListingPayload,
  CreateListingResponse,
  GetListingByIdResponse,
  GetListingsResponse,
} from '@/types/RequestsTypes';

// Requesting data from typescript-serverless rather than openapi
const API_BASE_URL = 'http://localhost:8383/listings';

export const getListings = async (): GetListingsResponse => {
  return axios
    .get(`${API_BASE_URL}`)
    .then((response) => {
      return response.data;
    })
    .catch((_error) => {
      throw new Error('Failed to fetch listing items');
    });
};

export const getListingById = async (id: number): GetListingByIdResponse => {
  return axios
    .get(`${API_BASE_URL}/${id}/prices`)
    .then((response) => {
      return response.data;
    })
    .catch((_error) => {
      throw new Error('Failed to fetch listing items');
    });
};

export const createListing = async (
  payload: CreateListingPayload,
): CreateListingResponse => {
  return axios
    .post(`${API_BASE_URL}`, payload)
    .then((response) => {
      return response.data;
    })
    .catch((_error) => {
      throw new Error('Failed to create listing item');
    });
};
