import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import categoriesReducer from "./reducers/categoriesReducer";

let store = configureStore({
    reducer:{
        users:usersReducer,
        categories:categoriesReducer
    }
})

export default store;