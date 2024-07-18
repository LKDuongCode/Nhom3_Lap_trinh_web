import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";



export const deleteAcart : any = createAsyncThunk(
    "users/deleteAcart",
    async ({ userId, arrDeleted }: { userId: number; arrDeleted: number[] } ) => {
        let response = await baseURL.patch(`/users/${userId}`, {
          carts: arrDeleted,
        });
        return response.data;
      });