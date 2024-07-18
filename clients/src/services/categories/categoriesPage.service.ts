import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";
import { Category } from "../../interface/categoriesType";

export const fetchCategoriesPage:any = createAsyncThunk(
    "categories/fetchCategoriesPage",
    async (pageNumber: number) => {
      const response = await baseURL.get(`/categories?_page=${pageNumber}&_limit=3`);
      return response.data as Category[];
    }
  );