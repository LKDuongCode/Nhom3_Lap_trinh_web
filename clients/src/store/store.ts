import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";

let store = configureStore({
    reducer:{
        users:usersReducer
    }
})

export default store;