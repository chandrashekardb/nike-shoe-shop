import {configureStore}  from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.jsx";

const store=configureStore({
    reducer:{
        cart:CartSlice,
    }
})

export default store;