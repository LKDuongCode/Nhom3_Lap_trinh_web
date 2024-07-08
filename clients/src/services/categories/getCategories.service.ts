import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

//hàm lấy data
export const fetchCategories : any = createAsyncThunk (
    "categories/fetchCategories",
    async ()=>{
        let response = await baseURL.get('/categories')
        return response.data;
    }
)