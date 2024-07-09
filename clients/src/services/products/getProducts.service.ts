import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

//hàm lấy data
export const fetchProducts : any = createAsyncThunk (
    "products/fetchProducts",
    async ()=>{
        let response = await baseURL.get('/products')
        return response.data;
    }
)