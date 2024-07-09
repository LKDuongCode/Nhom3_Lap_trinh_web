import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const deleteAproduct: any = createAsyncThunk(
    "products/deleteAproduct",
    async (id: number) => {
       await baseURL.delete(`/products/${id}`);
      return id;
    }
  );