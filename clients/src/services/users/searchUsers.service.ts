import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

export const searchUsersByName:any = createAsyncThunk(
  "users/searchUsersByName",
  async (searchTerm: string) => {

    let searchTermLower = searchTerm.toLowerCase();
    let response = await baseURL.get(`/users?user_name_like=${searchTermLower}`);

    return response.data;
  }
);