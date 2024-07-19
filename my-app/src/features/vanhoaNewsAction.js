import axios from "axios";
import {
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
} from "./vanhoaNewsSlice";

export const fetchRSSDataVanhoa = () => async (dispatch) => {
    try {
        dispatch(setLoadingVanhoa(true));

        const response = await axios.get("http://localhost:4050/am-thuc");
        const data = response.data.items;
        dispatch(setDataVanhoa(data));
        dispatch(setDataGridVanhoa(data.slice(0, 5)));

        const responseDataSection = await axios.get(
            "http://localhost:4050/am-thuc"
        );
        const responseDataSlider = await axios.get(
            "http://localhost:4050/am-thuc"
        );
        const responseDataBlock = await axios.get("http://localhost:4050/am-thuc");
        const responseDataPopularPost = await axios.get(
            "http://localhost:4050/am-thuc"
        );

        const dataSection = responseDataSection.data.items;
        const dataSlider = responseDataSlider.data;
        const dataSectionSecond = responseDataSection.data.items;
        const dataBlock = responseDataBlock.data;
        const dataPopularPost = responseDataPopularPost.data;

        dispatch(setDataSectionVanhoa(dataSection.slice(0, 9)));
        dispatch(setDataSliderVanhoa(dataSlider));
        dispatch(setDataSectionSecondVanhoa(dataSectionSecond.slice(9, 18)));
        dispatch(setDataBlockVanhoa(dataBlock));
        dispatch(setDataPopularPostVanhoa(dataPopularPost));

        dispatch(setLoadingVanhoa(false));
    } catch (error) {
        dispatch(setErrorVanhoa(error));
        dispatch(setLoadingVanhoa(true));
        console.error("Error fetching RSS data:", error);
    }
};
