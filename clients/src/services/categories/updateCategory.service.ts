import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const updateAcategory:any = createAsyncThunk(
    "categories/updateAcategory",
    async (category: { id: number; category_name: string; description: string ; category_img:string }) => {
      const response = await baseURL.patch(`/categories/${category.id}`, {
        category_name: category.category_name,
        description: category.description,
        category_img:category.category_img
      });
      return response.data;
    }
  );