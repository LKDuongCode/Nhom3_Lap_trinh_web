import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";
import cartsReducer from "./reducers/cartsReducer";

let store = configureStore({
    reducer:{
        users:usersReducer,
        categories:categoriesReducer,
        products:productsReducer,
        carts:cartsReducer,
    }
})

export default store;