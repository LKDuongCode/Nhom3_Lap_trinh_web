import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const addAcart : any = createAsyncThunk(
    "users/addAcart",
    async ({ userId, arrAdded }: { userId: number; arrAdded: number[] } ) => {
        let response = await baseURL.patch(`/users/${userId}`, {
          carts: arrAdded,
        });
        return response.data;
      });