import { createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../../interface/categoriesType";
import baseURL from "../../api";

//hàm thêm vào mảng 
export const addToCategories:any = createAsyncThunk(
    "categories/addToCategories",
   async (category:Category)=>{
      let response = await baseURL.post('/categories',category);
      return response.data;
    }
  )
  