import { createAsyncThunk } from "@reduxjs/toolkit";

import baseURL from "../../api";
import { Bill } from "../../interface/billsType";

//hàm thêm vào mảng 
export const addToBills:any = createAsyncThunk(
    "bills/addToBills",
   async (bill:Bill)=>{
      let response = await baseURL.post('/bills',bill);
      return response.data;
    }
  )
  