import { createSlice } from "@reduxjs/toolkit";
import { StateCartType } from "../../interface/productsType";
import { fetchCarts } from "../../services/cart/getCarts.service";
import { addToCarts } from "../../services/cart/addCarts.service";
import { deleteACart } from "../../services/cart/deleteCarts.service";

let initCarts : StateCartType= {
    loading: false,
    data: [],
    error: null,
  };

//toàn bộ hàm xử lí được lấy từ folder service.
//tạo function quản lí
const cartsReducer = createSlice({
    name:'carts',
    initialState:initCarts,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCarts.pending,(state,action)=>{
            // trạng thái chờ lấy dữ liệu
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCarts.fulfilled,(state,action)=>{
            //trạng thái lấy dữ liệu thành công
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchCarts.rejected,(state,action)=>{
            //trạng thái lấy dữ liệu thất bại
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(addToCarts.fulfilled,(state,action)=>{
            //thêm kho mới
            state.data = [...state.data,action.payload];
        })
        .addCase(deleteACart.fulfilled,(state,action)=>{
            //xóa kho

            state.data = state.data.filter(category => category.id !== action.payload);

        })

    }
})

//xuất
export default cartsReducer.reducer;
  