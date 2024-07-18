import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";
type UserUpdate = {
    id:number,
    user_name: string,
    email: string,
    full_name:string,
    avata: string,
    phone: string,
    address: string,
    updated_at: string,
}
export const updateAuser:any = createAsyncThunk(
    "users/updateAuser",
    async (user: UserUpdate) => {
      let response = await baseURL.patch(`/users/${user.id}`, {
        user_name: user.user_name,
        email: user.email,
        full_name:user.full_name,
        avata: user.avata,
        phone: user.phone,
        address: user.address,
        updated_at: user.updated_at,
      });
      return response.data;
    }
  );