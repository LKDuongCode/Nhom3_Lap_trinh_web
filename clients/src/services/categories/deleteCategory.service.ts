import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const deleteAcategory: any = createAsyncThunk(
  "categories/deleteAcategory",
  async (id: number) => {
     await baseURL.delete(`/categories/${id}`);
    return id;
  }
);
