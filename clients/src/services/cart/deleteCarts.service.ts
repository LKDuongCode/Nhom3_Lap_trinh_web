import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const deleteACart: any = createAsyncThunk(
    "carts/deleteACart",
    async (id: number) => {
       await baseURL.delete(`/carts/${id}`);
      return id;
    }
  );