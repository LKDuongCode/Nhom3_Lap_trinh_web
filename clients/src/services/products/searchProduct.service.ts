import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const searchProductByName:any = createAsyncThunk(
  "products/searchProductByName",
  async (searchTerm: string) => {

    let searchTermLower = searchTerm.toLowerCase();
    let response = await baseURL.get(`/products?product_name_like=${searchTermLower}`);

    return response.data;
  }
);