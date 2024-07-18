import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/products/getProducts.service";
import { addToProducts } from "../../services/products/addProducts.service";
import { deleteAproduct } from "../../services/products/deleteProducts.service";
import { updateAproduct } from "../../services/products/updateProducts.service";
import { StateProductType } from "../../interface/productsType";
import { deleteAwish } from "../../services/wishs/deleteFromWishList.service";
import { addAwish } from "../../services/wishs/addAproductToWishs.service";
import { searchProductByName } from "../../services/products/searchProduct.service";
import { sortProductsDownToUp, sortProductsUpToDown } from "../../services/products/sortProduct.service";
import { filterProducts } from "../../services/products/filterProducts.service";

let initProducts: StateProductType = {
  loading: false,
  data: [],
  error: null,
};

//toàn bộ hàm xử lí được lấy từ folder service.
//tạo function quản lí
const productsReducer = createSlice({
  name: "products",
  initialState: initProducts,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        // trạng thái chờ lấy dữ liệu
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        //trạng thái lấy dữ liệu thành công
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        //trạng thái lấy dữ liệu thất bại
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToProducts.fulfilled, (state, action) => {
        //thêm sản phẩm
        state.data = [...state.data, action.payload];
      })
      .addCase(deleteAproduct.fulfilled, (state, action) => {
        //xóa sản phẩm

        state.data = state.data.filter(
          (category) => category.id !== action.payload
        );
      })
      .addCase(updateAproduct.fulfilled, (state, action) => {
        //update sản phẩm
        let index = state.data.findIndex(
          (category) => category.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(searchProductByName.fulfilled, (state, action) => {
        //tìm kiếm
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(sortProductsUpToDown.fulfilled, (state, action) => {
        //sắp xếp cao đến thấp
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(sortProductsDownToUp.fulfilled, (state, action) => {
        //sắp xếp thấp đến cao
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(filterProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; 
      })

  },
});

//xuất
export default productsReducer.reducer;
