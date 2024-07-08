import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

//hàm khóa
export const lockAnUser:any = createAsyncThunk(
    "users/lockAnUser",
    async (id:number)=>{
        let response = await baseURL.patch(`/users/${id}`, {
            status:false,
          })
          return response.data;
    }
)

export const unlockAnUser:any = createAsyncThunk(
    "users/unlockAnUser",
    async (id:number)=>{
        let response = await baseURL.patch(`/users/${id}`,{
            status:true,
        })
        return response.data;
    }
)