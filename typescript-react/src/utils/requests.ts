import axios from 'axios';

import { FormState } from '@/types/FormTypes';

const API_BASE_URL = 'http://localhost:8080/listings';

export const getListing = async (): Promise<FormState[]> => {
  return axios
    .get(`${API_BASE_URL}`)
    .then((response) => {
      return response.data;
    })
    .catch((_error) => {
      throw new Error('Failed to fetch listing items');
    });
};

export const createListing = async (payload: FormState): Promise<FormState> => {
  return axios
    .post(`${API_BASE_URL}`, payload)
    .then((response) => {
      return response.data;
    })
    .catch((_error) => {
      throw new Error('Failed to create listing item');
    });
};
