import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    data: null,
    errorMessage: null,
    isSave: false,
};

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setError: (state, action) => {
            state.errorMessage = action.payload;
        },
        setIsSave: (state, action) => {
            state.isSave = action.payload;
        },
        clearData: (state) => {
            state.loading = true;
            state.data = null;
            state.errorMessage = null;
            state.isSave = false;
        },
    },
});

export const { setLoading, setData, setError, setIsSave, clearData } =
    newsSlice.actions;

export default newsSlice.reducer;
