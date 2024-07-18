import { createSlice } from "@reduxjs/toolkit";
import { StateCategoryType } from "../../interface/categoriesType";
import { fetchCategories } from "../../services/categories/getCategories.service";
import { addToCategories } from "../../services/categories/addCategory.service";
import { deleteAcategory } from "../../services/categories/deleteCategory.service";
import { updateAcategory } from "../../services/categories/updateCategory.service";
import { sortCategoriesUpToDown } from "../../services/categories/sortCategories.service";
import { sortCategoriesDownToUp } from "../../services/categories/sortCategoriesDown.service";
import { searchCategoriesByName } from "../../services/categories/searchByName.service";
import { fetchCategoriesPage } from "../../services/categories/categoriesPage.service";

let initCategories: StateCategoryType = {
  loading: false,
  data: [],
  // currentPage: 1,
  // totalPages: 1,
  error: null,
  // itemsPerPage: 10, 
};

//toàn bộ hàm xử lí được lấy từ folder service.
//tạo function quản lí
const categoriesReducer = createSlice({
    name:'categories',
    initialState:initCategories,
    reducers: {
      // setItemsPerPage(state, action) {
      //   state.itemsPerPage = action.payload;
      // },
    },
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
            //update
            let index = state.data.findIndex(category => category.id === action.payload.id);
            if (index !== -1) {
              state.data[index] = action.payload;
            }
        })
        .addCase(sortCategoriesUpToDown.fulfilled, (state, action) => {
            //sắp xếp cao đến thấp
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(sortCategoriesDownToUp.fulfilled, (state, action) => {
            //sắp xếp thấp đến cao
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(searchCategoriesByName.fulfilled, (state, action) => {
            //tìm kiếm
            state.loading = false;
            state.data = action.payload;
          })
          // .addCase(fetchCategoriesPage.fulfilled, (state, action) => {
          //   state.loading = false;
          //   state.data = action.payload;
          //   // Tính toán currentPage và totalPages dựa vào số lượng dữ liệu và itemsPerPage
          //   state.currentPage = Number(action.meta.arg);
          //   state.totalPages = Math.ceil(action.payload.length / state.itemsPerPage);
           
          // });


    }
})

//xuất

// export const { setItemsPerPage } = categoriesReducer.actions;
export default categoriesReducer.reducer;
  