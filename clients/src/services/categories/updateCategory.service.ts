import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";
import { Category } from "../../interface/categoriesType";

export const updateAcategory:any = createAsyncThunk(
    "categories/updateAcategory",
    async (category: { id: number; name: string; description: string }) => {
      const response = await baseURL.patch(`/categories/${category.id}`, {
        category_name: category.name,
        description: category.description,
      });
      return response.data;
    }
  );