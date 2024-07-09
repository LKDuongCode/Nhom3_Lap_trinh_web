import { createSlice } from "@reduxjs/toolkit";
import { StateUserType } from "../../interface/usersType";
import { fetchProducts } from "../../services/products/getProducts.service";
import { addToProducts } from "../../services/products/addProducts.service";
import { deleteAproduct } from "../../services/products/deleteProducts.service";
import { updateAproduct } from "../../services/products/updateProducts.service";

let initProducts : StateUserType= {
    loading: false,
    data: [],
    error: null,
  };

//toàn bộ hàm xử lí được lấy từ folder service.
//tạo function quản lí
const productsReducer = createSlice({
    name:'products',
    initialState:initProducts,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            // trạng thái chờ lấy dữ liệu
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            //trạng thái lấy dữ liệu thành công
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            //trạng thái lấy dữ liệu thất bại
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(addToProducts.fulfilled,(state,action)=>{
            //thêm kho mới
            state.data = [...state.data,action.payload];
        })
        .addCase(deleteAproduct.fulfilled,(state,action)=>{
            //xóa kho

            state.data = state.data.filter(category => category.id !== action.payload);

        })
        .addCase(updateAproduct.fulfilled,(state,action)=>{
            let index = state.data.findIndex(category => category.id === action.payload.id);
            if (index !== -1) {
              state.data[index] = action.payload;
            }
        })


    }
})

//xuất
export default productsReducer.reducer;
  