import { createSlice } from "@reduxjs/toolkit";

const homeNewsSlice = createSlice({
    name: "homeNews",
    initialState: {
        url: "https://baotintuc.vn/",
        loading: true,
        data: [],
        errorMessage: null,
        dataGrid: [],
        dataSection: [],
        dataSlider: [],
        dataSectionSecond: [],
        dataBlock: [],
        dataPopularPost: [],
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setError: (state, action) => {
            state.errorMessage = action.payload;
        },
        setDataGrid: (state, action) => {
            state.dataGrid = action.payload;
        },
        setDataSection: (state, action) => {
            state.dataSection = action.payload;
        },
        setDataSlider: (state, action) => {
            state.dataSlider = action.payload;
        },
        setDataSectionSecond: (state, action) => {
            state.dataSectionSecond = action.payload;
        },
        setDataBlock: (state, action) => {
            state.dataBlock = action.payload;
        },
        setDataPopularPost: (state, action) => {
            state.dataPopularPost = action.payload;
        },
    },
});

export const {
    setLoading,
    setUrl,
    setData,
    setError,
    setDataGrid,
    setDataSection,
    setDataSlider,
    setDataSectionSecond,
    setDataBlock,
    setDataPopularPost,
} = homeNewsSlice.actions;

export default homeNewsSlice.reducer;
