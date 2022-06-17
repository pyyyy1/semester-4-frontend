// Mengimport createSlice
import {createSlice} from "@reduxjs/toolkit";
import data from "../../utils/constants/data";
// import { updateMovies } from "../../features/movieSlice"

/**
 * Membuat slice untuk melakukan generate  action dan reducers
 * Params object terdiri dari name, initial state, reducers
*/
const movieSlice = createSlice({
    // Nama slice
    name: "Movies Slice",

    // Nilai awal dari state movies
    initialState: {
        movies: data,
    },

    // Membuat reducer: untuk update state
    reducers: {
        addMovie(state, action) {
            state.movies.push(action.payload);
        },
        
        // Membuat reducer updateMovies untuk update movies
        updateMovies(state, action) {
            state.movies = action.payload;
        }
    },
});

// Melakukan generate action dan reducers pada movie
const moviesReducer = movieSlice.reducer;
const { addMovie, updateMovies } = movieSlice.actions;

// Mengexport refucers and actions
export default moviesReducer;;
export { addMovie, updateMovies };