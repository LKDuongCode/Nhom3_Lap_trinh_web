import { createSlice } from "@reduxjs/toolkit";
import { StateUserType } from "../../interface/usersType";
import { fetchUsers } from "../../services/users/getUsers.service";
import { addToUsers } from "../../services/users/addUsers.service";
import { lockAnUser, unlockAnUser } from "../../services/users/lockUsers.service";
import { addAwish } from "../../services/wishs/addAproductToWishs.service";
import { deleteAwish } from "../../services/wishs/deleteFromWishList.service";
import { deleteAcart } from "../../services/cart/deleteCarts.service";
import { addAcart } from "../../services/cart/addCarts.service";
import { deleteALLcart } from "../../services/cart/deleteAllCart.service";
import { updateAuser } from "../../services/users/updateUser.service";
import { searchUsersByName } from "../../services/users/searchUsers.service";
import { sortUsersDownToUp, sortUsersUpToDown } from "../../services/users/sortUser.service";

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
            //khóa user
            let updatedUser = action.payload;
            state.data = state.data.map(user => 
              user.id === updatedUser.id ? updatedUser : user
            )
        })
        .addCase(unlockAnUser.fulfilled,(state,action)=>{
            //mở khóa user
            let updatedUser = action.payload;
            state.data = state.data.map(user => 
              user.id === updatedUser.id ? updatedUser : user
            )
        })
        .addCase(deleteAwish.fulfilled,(state,action)=>{
            // xóa khỏi danh sách yêu thích
            let updatedUserFavs = action.payload;
            state.data = state.data.map(user => 
              user.id === updatedUserFavs.id ? updatedUserFavs : user
            )
        })
        .addCase(addAwish.fulfilled,(state,action)=>{
            //thêm vào danh sách yêu thích
            let updatedUserFavs = action.payload;
            state.data = state.data.map(user => 
              user.id === updatedUserFavs.id ? updatedUserFavs : user
            )
        })
        .addCase(deleteAcart.fulfilled,(state,action)=>{
          //xóa một sản phẩm khỏi giỏ hàng
            let updatedUserCarts = action.payload;
            state.data = state.data.map(user => 
              user.id === updatedUserCarts.id ? updatedUserCarts : user
            )
        })
        .addCase(deleteALLcart.fulfilled,(state,action)=>{
          //xóa hết giỏ hàng
          let updatedUserCarts = action.payload;
          state.data = state.data.map(user => 
            user.id === updatedUserCarts.id ? updatedUserCarts : user
          )
        })
        .addCase(addAcart.fulfilled,(state,action)=>{
          //thêm một vào giỏ hàng
          let updatedUserCarts = action.payload;
          state.data = state.data.map(user => 
            user.id === updatedUserCarts.id ? updatedUserCarts : user
          )
        })
            .addCase(updateAuser.fulfilled, (state, action) => {
          //update info user
          let index = state.data.findIndex(
            (user) => user.id === action.payload.id
          );
     
          if (index !== -1) {
            state.data[index] = action.payload;
          }
        })
        .addCase(sortUsersUpToDown.fulfilled, (state, action) => {
          //sắp xếp cao đến thấp
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(sortUsersDownToUp.fulfilled, (state, action) => {
          //sắp xếp thấp đến cao
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(searchUsersByName.fulfilled, (state, action) => {
          //tìm kiếm
          state.loading = false;
          state.data = action.payload;
        })

    }
})

//xuất
export default usersReducer.reducer;