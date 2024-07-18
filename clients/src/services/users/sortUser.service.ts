import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

// Hàm lấy data và sắp xếp giảm dần
export const sortUsersDownToUp:any = createAsyncThunk(
  "users/sortUsersDownToUp",
  async () => {
    let response = await baseURL.get('/users?_sort=user_name&order=desc');
    return response.data.reverse();
  }
);
//hàm lấy data
export const sortUsersUpToDown : any = createAsyncThunk (
    "users/sortUsersUpToDown",
    async ()=>{
        let response = await baseURL.get('/users?_sort=user_name&order=asc')
        return response.data;
    }
)