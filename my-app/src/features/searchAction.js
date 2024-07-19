import axios from "axios";
import { setLoading, setData, setError , setPopular} from "./searchSlice";
import { useState} from "react";

export const fetchRSSData =(keywords) => async (dispatch) =>{
    try {
        // console.log(keywords);
        dispatch(setLoading(true));
        const reponseawaw = await axios.get(
            `http://localhost:4050/search?keywords=${keywords}`
        );
        const data = reponse.data;
        // console.log(data);
        dispatch(setData(data));
        const reponseDataPopularPost = await axios.get(
            "http://localhost:4050/tin-nong"
        );
        dispatch(setPopular(reponseDataPopularPost.data));
        dispatch(setLoading(false));
    }
    catch(error){
        dispatch(setError(error));
        dispatch(setLoading(true));
        console.error("Error fetching RSS data:",error);
    }
};