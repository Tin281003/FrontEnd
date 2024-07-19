import {createSlice} from "@reduxjs/toolkit";

const initialState= {
    loading:true,
    data:[],
    errorMessage:null,
};

const recentSlice = createSlice({
    name: "recent",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = acction.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setError: (state, action) => {
            state.errorMessage = action.payload;
        },
    },
});

    export const { setLoading, setData, setError} = recentSlice.action;
     export default recentSlice.reducer;
