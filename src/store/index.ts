import { configureStore } from "@reduxjs/toolkit";
import menu from "./slices/menu";

export default configureStore({
    reducer: {
        menu
    }
})