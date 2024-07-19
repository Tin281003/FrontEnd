import { createSlice } from "@reduxjs/toolkit";

const vanhoaNewsSlice = createSlice({
    name: "vanhoaNews",
    initialState: {
        url: "https://baotintuc.vn/am-thuc.rss",
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
        setLoadingVanhoa: (state, action) => {
            state.loading = action.payload;
        },
        setUrlVanhoa: (state, action) => {
            state.url = action.payload;
        },
        setDataVanhoa: (state, action) => {
            state.data = action.payload;
        },
        setErrorVanhoa: (state, action) => {
            state.errorMessage = action.payload;
        },
        setDataGridVanhoa: (state, action) => {
            state.dataGrid = action.payload;
        },
        setDataSectionVanhoa: (state, action) => {
            state.dataSection = action.payload;
        },
        setDataSliderVanhoa: (state, action) => {
            state.dataSlider = action.payload;
        },
        setDataSectionSecondVanhoa: (state, action) => {
            state.dataSectionSecond = action.payload;
        },
        setDataBlockVanhoa: (state, action) => {
            state.dataBlock = action.payload;
        },
        setDataPopularPostVanhoa: (state, action) => {
            state.dataPopularPost = action.payload;
        },
    },
});

export const {
    setLoadingVanhoa,
    setUrlVanhoa,
    setDataVanhoa,
    setErrorVanhoa,
    setDataGridVanhoa,
    setDataSectionVanhoa,
    setDataSliderVanhoa,
    setDataSectionSecondVanhoa,
    setDataBlockVanhoa,
    setDataPopularPostVanhoa,
} = vanhoaNewsSlice.actions;

export default vanhoaNewsSlice.reducer;
