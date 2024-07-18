import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const searchCategoriesByName:any = createAsyncThunk(
  "categories/searchCategoriesByName",
  async (searchTerm: string) => {

    let searchTermLower = searchTerm.toLowerCase();
    let response = await baseURL.get(`/categories?category_name_like=${searchTermLower}`);

    return response.data;
  }
);
