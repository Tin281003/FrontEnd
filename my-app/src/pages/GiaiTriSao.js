import React,{useEffect} from "react";
import "../styles/style.css";
import axios from "axios";
import NewsGrid from "../components/NewsGrid";
import NewsSection from "../components/NewsSection";
import SliderNews from "../components/SliderNews";
import NewsBlock from "../components/NewsBlock";
import PopularPosts from "../components/PopularPosts ";
import Loading from "../components/Loading";
import Travel from "../components/Culture";
import Technology from "../components/Technology";

const initialState = {
    url: "https://baotintuc.vn/giai-tri-sao.rss",
    loading: true,
    data: [],
    errorMessage: null,
    dataGrid: [],
    dataSection: [],
    dataSlider: [],
    dataSectionSecond: [],
    dataBlock: [],
};
const GiaiTriSaoNewReducer= (state, action) =>{
    switch (action.type){
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        case "SET_URL":
            return { ...state, url: action.payload };
        case "SET_DATA":
            return { ...state, data: action.payload };
        case "SET_ERROR":
            return { ...state, errorMessage: action.payload };
        case "SET_DATA_GRID":
            return { ...state, dataGrid: action.payload };
        case "SET_DATA_SECTION":
            return { ...state, dataSection: action.payload };
        case "SET_DATA_SLIDER":
            return { ...state, dataSlider: action.payload };
        case "SET_DATA_SECTION_SECOND":
            return { ...state, dataSectionSecond: action.payload };
        case "SET_DATA_BLOCK":
            return { ...state, dataBlock: action.payload };
        case "SET_DATA_POPURLAR_POST":
            return { ...state, dataPopularPost: action.payload };
        default:
            return state;
    }
    };
const GiaiTriSao =() =>{
    const [state, dispatch] = React.useReducer(GiaiTriSaoNewReducer, initialState);
    async function fetchData(){
        try{
            const response = await axios.get("http://localhost:4050/giai-tri-sao");
            const data = response.data.slice(0,5);
            // Handle the data
            console.log(data);
            dispatch({ type: "SET_DATA", payload: data });
            dispatch({
                type: "SET_DATA_GRID",
                payload: data.slice(0,5),
            });
            const responseDataSection = await axios.get(
                "http://localhost:4050/giai-tri-sao"
            );
            const responseDataSlider = await axios.get(
                "http://localhost:4050/am-thuc"
            );
            const responseDataBlock = await axios.get(
                "http://localhost:4050/giai-tri-sao"
            );
            const responseDataPopularPost = await axios.get(
                "http://localhost:4050/giai-tri-sao"
            );
            const dataSection = responseDataSection.data;
            const dataSlider = responseDataSlider.data;
            const dataSectionSecond = responseDataSection.data;
            const dataBlock = responseDataBlock.data;
            const dataPopularPost = responseDataPopularPost.data;

            // console.log(dataSection);
            dispatch({ type: "SET_DATA_SECTION", payload: dataSection.slice(0, 10) });
            dispatch({ type: "SET_DATA_SLIDER", payload: dataSlider });
            dispatch({
                type: "SET_DATA_SECTION_SECOND",
                payload: dataSectionSecond.slice(0,30),
            });
            dispatch({ type: "SET_DATA_BLOCK", payload: dataBlock });
            dispatch({ type: "SET_DATA_POPURLAR_POST", payload: dataPopularPost });
            dispatch({ type: "SET_LOADING", payload: false });
        } catch (error) {
            dispatch({ type: "SET_ERROR", payload: error });
            dispatch({ type: "SET_LOADING", payload: true });
            console.error("Error fetching RSS data:", error);
        }

    }

    useEffect(() => {
        fetchData();
    }, [state.url]);
    // const newsArticlesGrid = state.data.slice(0, 5);
    // const updatedData = state.data.slice(5);
    return (
        <div className="text-gray-700 pt-9 sm:pt-10 text-left">
            <div className="margin_top5rem ">
                <h1 className="h1 category-page__name text-center"> Văn hóa </h1>
                <div>
                    <ul className="flex justify-center ">
                        <li className="">
                            <a className="block py-3 px-6 border-b-2 border-transparent text-lg"  href="../am-thuc">Ẩm thực</a>
                        </li>
                        <li className="">
                            <a  className="block py-3 px-6 border-b-2 border-transparent text-lg" style={{color:"red" }} href="../giai-tri-sao">Giải trí sao</a>
                        </li>
                        <li className="">
                            <a className="block py-3 px-6 border-b-2 border-transparent text-lg" href="../doi-song-van-hoa"> Đời sống văn hóa</a>
                        </li>

                    </ul>
                </div>
            </div>
            {state.loading && <Loading></Loading>}
            {!state.loading && state.errorMessage && (
                <p className="text-red-400 my-5">{state.errorMessage}</p>
            )}
            <main id="content">
                {/*<NewsGrid newsArticles={state.dataGrid} />*/}
                <div className="bg-white py-6">
                    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                        <div className="flex flex-row flex-wrap">
                            <NewsBlock dataBlock={state.dataBlock}></NewsBlock>
                            <PopularPosts
                                dataPopularPost={state.dataPopularPost}
                            ></PopularPosts>
                        </div>
                    </div>
                </div>
                <NewsSection dataSection={state.dataSection}></NewsSection>
                {/*<NewsSection dataSection={state.dataSectionSecond}></NewsSection>*/}
                <SliderNews dataSlider={state.dataSlider}></SliderNews>
            </main>

        </div>
    );
}

export default GiaiTriSao;

