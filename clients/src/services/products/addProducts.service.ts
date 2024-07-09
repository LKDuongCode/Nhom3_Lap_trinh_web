import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../interface/productsType";
import baseURL from "../../api";

//hàm thêm vào mảng 
export const addToProducts:any = createAsyncThunk(
    "products/addToProducts",
   async (product:Product)=>{
      let response = await baseURL.post('/products',product);
      return response.data;
    }
  )
  