import { createSlice } from "@reduxjs/toolkit";
import { StateUserType } from "../../interface/usersType";
import { fetchUsers } from "../../services/users/getUsers.service";

//state khởi tạo category
let initUsers : StateUserType= {
    loading: false,
    data: [],
    error: null,
  };
  

//toàn bộ hàm xử lí được lấy từ folder service.
//tạo function quản lí
const usersReducer = createSlice({
    name:'users',
    initialState:initUsers,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchUsers.pending,(state,action)=>{
            // trạng thái chờ lấy dữ liệu
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            //trạng thái lấy dữ liệu thành công

            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            //trạng thái lấy dữ liệu thất bại
            state.loading = false;
            state.error = action.error.message;
        })

    }
})

//xuất
export default usersReducer.reducer;