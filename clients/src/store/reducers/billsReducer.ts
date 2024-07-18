import { createSlice } from "@reduxjs/toolkit";
import { StateBillType } from "../../interface/billsType";
import { fetchBills } from "../../services/bills/getBills.service";
import { addToBills } from "../../services/bills/addABill.service";

let initBills: StateBillType = {
    loading: false,
    data: [],
    error: null,
  };
  
  //toàn bộ hàm xử lí được lấy từ folder service.
  //tạo function quản lí
  const billsReducer = createSlice({
    name: "bills",
    initialState: initBills,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBills.pending, (state, action) => {
          // trạng thái chờ lấy dữ liệu
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchBills.fulfilled, (state, action) => {
          //trạng thái lấy dữ liệu thành công
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchBills.rejected, (state, action) => {
          //trạng thái lấy dữ liệu thất bại
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(addToBills.fulfilled, (state, action) => {
          //thêm bill
          state.data = [...state.data, action.payload];
        })
  
    },
  });
  
  //xuất
  export default billsReducer.reducer;
  