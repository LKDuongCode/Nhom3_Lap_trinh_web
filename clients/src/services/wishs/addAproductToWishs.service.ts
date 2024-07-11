import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const addAwish : any = createAsyncThunk(
    "products/addAwish",
    async (id:number) => {
        let response = await baseURL.patch(`/products/${id}`, {
            favorite:true,
        });
        return response.data;
      }
  );