import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";

let store = configureStore({
    reducer:{
        users:usersReducer,
        categories:categoriesReducer,
        products:productsReducer
    }
})

export default store;