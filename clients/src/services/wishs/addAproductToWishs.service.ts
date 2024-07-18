import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const addAwish : any = createAsyncThunk(
    "users/addAwish",
    async ({ userId, arrAdded }: { userId: number; arrAdded: number[] } ) => {
        let response = await baseURL.patch(`/users/${userId}`, {
          favorites: arrAdded,
        });
        return response.data;
      });