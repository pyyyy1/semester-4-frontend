// Mengimport configureStore untuk membuat store pada komponen
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movieSlice";

// Membuat store: untuk state global
// Menerima params object adalah fungsi reducer
// Menyimpan slice yang sudah dibuat pada komponen
const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});

// Mengexport store
export default store;