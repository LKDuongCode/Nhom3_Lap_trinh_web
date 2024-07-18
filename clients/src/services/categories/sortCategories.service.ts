import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

//hàm lấy data
export const sortCategoriesUpToDown : any = createAsyncThunk (
    "categories/sortCategoriesUpToDown",
    async ()=>{
        let response = await baseURL.get('/categories?_sort=category_name&order=asc')
        return response.data;
    }
)