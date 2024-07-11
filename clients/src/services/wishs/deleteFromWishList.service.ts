import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const deleteAwish : any = createAsyncThunk(
    "products/deleteAwish",
    async (id:number) => {
        let response = await baseURL.patch(`/products/${id}`, {
            favorite:false,
        });
        return response.data;
      }
  );