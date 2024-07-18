import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

//hàm lấy data
export const fetchBills : any = createAsyncThunk (
    "bills/fetchBills",
    async ()=>{
        let response = await baseURL.get('/bills')
        return response.data;
    }
)