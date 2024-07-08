import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api/index";

//hàm lấy data
export const fetchUsers : any = createAsyncThunk (
    "users/fetchUsers",
    async ()=>{
        let response = await baseURL.get('/users')
        return response.data;
    }
)