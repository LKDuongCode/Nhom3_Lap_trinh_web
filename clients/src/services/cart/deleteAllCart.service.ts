import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";



export const deleteALLcart : any = createAsyncThunk(
    "users/deleteALLcart",
    async ({ userId, arrDeleted }: { userId: number; arrDeleted: number[] } ) => {
        let response = await baseURL.patch(`/users/${userId}`, {
          carts: arrDeleted,
        });
        return response.data;
      });
  
