import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

//hàm lấy data
export const fetchCarts : any = createAsyncThunk (
    "carts/fetchCarts",
    async ()=>{
        let response = await baseURL.get('/carts')
        return response.data;
    }
)