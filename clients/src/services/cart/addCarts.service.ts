import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../interface/productsType";
import baseURL from "../../api";

//hàm thêm vào mảng 
export const addToCarts:any = createAsyncThunk(
    "carts/addToCarts",
   async (product:Product)=>{
      let response = await baseURL.post('/carts',product);
      return response.data;
    }
  )