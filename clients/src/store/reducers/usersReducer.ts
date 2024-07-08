import { createSlice } from "@reduxjs/toolkit";
import { StateUserType } from "../../interface/usersType";
import { fetchUsers } from "../../services/users/getUsers.service";
import { addToUsers } from "../../services/users/addUsers.service";
import { lockAnUser, unlockAnUser } from "../../services/users/lockUsers.service";

//state khởi tạo
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
        .addCase(addToUsers.fulfilled,(state,action)=>{
            //thêm mới user
            state.data = [...state.data,action.payload];
        })
        .addCase(lockAnUser.fulfilled,(state,action)=>{
            let updatedUser = action.payload;
            state.data = state.data.map(user => 
              user.id === updatedUser.id ? updatedUser : user
            )
        })
        .addCase(unlockAnUser.fulfilled,(state,action)=>{
            let updatedUser = action.payload;
            state.data = state.data.map(user => 
              user.id === updatedUser.id ? updatedUser : user
            )
        })

    }
})

//xuất
export default usersReducer.reducer;