import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const deleteAwish : any = createAsyncThunk(
    "users/deleteAwish",
    async ({ userId, arrDeleted }: { userId: number; arrDeleted: number[] } ) => {
        let response = await baseURL.patch(`/users/${userId}`, {
          favorites: arrDeleted,
        });
        return response.data;
      });