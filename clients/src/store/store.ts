import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import productsReducer from "./reducers/productsReducer";
import billsReducer from "./reducers/billsReducer";

let store = configureStore({
    reducer:{
        users:usersReducer,
        categories:categoriesReducer,
        products:productsReducer,
        bills:billsReducer,
    }
})

export default store;