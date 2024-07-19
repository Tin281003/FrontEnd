import { createSlice} from "@reduxjs/toolkit";
import {setData, setError} from "./recentSlice";

const initialState = {
    popular: [],
    loading: false,
    errorMessage: "",
    data: [],
};
const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        setLoading:(state, action) =>{
            state.loading = action.payload;
        },
        setPopular:(state, action) => {
            state.popular = action, payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
setError:(state, action) => {
            state.errorMessage = action.payload;
    },
    },
});
export const { setLoading, setPopular, setData, setError} = searchSlice.action;
export default searchSlice.reducer;
