// Mengimport createSlice
import {createSlice} from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

/**
 * Membuat slice untuk melakukan generate  action dan reducers
 * Params object terdiri dari name, initial state, reducers
*/
const movieSlice = createSlice({
    // nama slice
    name: "Movies Slice",

    // Nilai awal dari state movies
    initialState: {
        movies: data
    },

    // Membuat reducer: untuk update state
    reducers: {
        addMovie(state, action) {
            state.movies.push(action.payload);
        },
        deleteMovie(){},
    },
});

// Melakukan generate action dan reducers pada movie
const moviesReducer = movieSlice.reducer;
const {addMovie, deleteMovie} = movieSlice.actions;

export default moviesReducer;;
export {addMovie, deleteMovie};
