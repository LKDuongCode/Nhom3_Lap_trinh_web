import { createSlice } from "@reduxjs/toolkit";
import { StateCategoryType } from "../../interface/categoriesType";
import { fetchCategories } from "../../services/categories/getCategories.service";
import { addToCategories } from "../../services/categories/addCategory.service";
import { deleteAcategory } from "../../services/categories/deleteCategory.service";
import { updateAcategory } from "../../services/categories/updateCategory.service";

let initCategories : StateCategoryType= {
    loading: false,
    data: [],
    error: null,
  };

//toàn bộ hàm xử lí được lấy từ folder service.
//tạo function quản lí
const categoriesReducer = createSlice({
    name:'categories',
    initialState:initCategories,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCategories.pending,(state,action)=>{
            // trạng thái chờ lấy dữ liệu
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCategories.fulfilled,(state,action)=>{
            //trạng thái lấy dữ liệu thành công
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchCategories.rejected,(state,action)=>{
            //trạng thái lấy dữ liệu thất bại
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(addToCategories.fulfilled,(state,action)=>{
            //thêm kho mới
            state.data = [...state.data,action.payload];
        })
        .addCase(deleteAcategory.fulfilled,(state,action)=>{
            //xóa kho

            state.data = state.data.filter(category => category.id !== action.payload);

        })
        .addCase(updateAcategory.fulfilled,(state,action)=>{
            let index = state.data.findIndex(category => category.id === action.payload.id);
            if (index !== -1) {
              state.data[index] = action.payload;
            }
        })


    }
})

//xuất
export default categoriesReducer.reducer;
  