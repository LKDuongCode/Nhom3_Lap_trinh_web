import { createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../../api';


export const filterProducts:any = createAsyncThunk(
  'products/filterProducts',
  async ({ minPrice, maxPrice }: { minPrice: number, maxPrice: number }) => {
    console.log(minPrice,maxPrice);
    let response = await baseURL.get(`/products?unit_price=${minPrice}&unit_price=${maxPrice}`);
    console.log(response.data);
    return response.data;
  }
);