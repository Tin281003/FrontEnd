import axios from "axios";
import {
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
} from "./homeNewsSlice";


export const fetchRSSData = () => async (dispatch) =>{
    try {
        dispatch(setLoading(true));
        const response = await axios.get("http://localhost4050/home");
        const data = response.data.items;
        dispatch(setData(data));
        dispatch(setDataGrid(data.slice(0,5)));

export const fetchRSSData = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const response = await axios.get("http://localhost:4050/home");
        const data = response.data.items;
        dispatch(setData(data));
        dispatch(setDataGrid(data.slice(0, 5)));

        const responseDataSection = await axios.get(
            "http://localhost:4050/thoi-su"
        );
        const responseDataSlider = await axios.get(
            "http://localhost:4050/the-gioi"
        );
        const responseDataBlock = await axios.get(
            "http://localhost:4050/kinh-te"
        );
        const responseDataPopularPost = await axios.get(
            "http://localhost:4050/tin-nong"

        const responseDataBlock = await axios.get("http://localhost:4050/gioi-tre");
        const responseDataPopularPost = await axios.get(
            "http://localhost:4050/tin-24h"
        );

        const dataSection = responseDataSection.data.items;
        const dataSlider = responseDataSlider.data;
        const dataSectionSecond = responseDataSection.data.items;
        const dataBlock = responseDataBlock.data;
        const dataPopularPost = responseDataPopularPost.data;

        dispatch(setDataSection(dataSection.slice(0, 9)));
        dispatch(setDataSlider(dataSlider));
        dispatch(setDataSectionSecond(dataSectionSecond.slice(9, 18)));
        dispatch(setDataBlock(dataBlock));
        dispatch(setDataPopularPost(dataPopularPost));
        dispatch(setLoading(false));
    } catch (error){

        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError(error));
        dispatch(setLoading(true));
        console.error("Error fetching RSS data:", error);

    }
};
};
