import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../api";

// Hàm lấy data và sắp xếp giảm dần
export const sortCategoriesDownToUp:any = createAsyncThunk(
  "categories/sortCategoriesDownToUp",
  async () => {
    let response = await baseURL.get('/categories?_sort=category_name&order=desc');
    return response.data.reverse();
  }
);