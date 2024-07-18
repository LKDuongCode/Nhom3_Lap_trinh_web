import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

//hàm lấy data
export const sortProductsUpToDown : any = createAsyncThunk (
    "products/sortProductsUpToDown",
    async ()=>{
        let response = await baseURL.get('/products?_sort=unit_price&order=asc')
        return response.data;
    }
)
// Hàm lấy data và sắp xếp giảm dần
export const sortProductsDownToUp:any = createAsyncThunk(
    "products/sortProductsDownToUp",
    async () => {
      let response = await baseURL.get('/products?_sort=unit_price&order=desc');
      return response.data.reverse();
    }
  );