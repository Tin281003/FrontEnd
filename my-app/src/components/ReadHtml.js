import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Detail.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import {
    setData,
    setError,
    setLoading,
    clearData,
    setIsSave,
} from "../features/newsSlice";
import { setData as setRecentData } from "../features/recentSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { toast } from "react-toastify";

function ReadLink({ linkHtml }) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.news);
    const recentState = useSelector((state) => state.recent);
    const [saveNews, setSaveNews] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // console.log(linkHtml);
                const response = await axios.get(
                    `http://localhost:4050/news?linkHtml=${linkHtml}`
                );
                const data = response.data;
                const storedArray = JSON.parse(localStorage.getItem("newsSave")) || [];
                const isSave = storedArray.some(
                    (item) => item.linkHtml === data.linkHtml
                );
                setSaveNews(isSave);
                dispatch(setData(data));
                dispatch(setLoading(false));
                const recentData = recentState.data;
                let isDataExist = true;
                if (recentData && data)
                    isDataExist = recentData.some(
                        (item) => item.linkHtml === data.linkHtml
                    );

                if (recentData && data && !isDataExist) {
                    const newData = [data, ...recentData];
                    dispatch(setRecentData(newData));
                    localStorage.setItem("newsData", JSON.stringify(newData));
                }
            } catch (error) {
                dispatch(setError(error));
                dispatch(setLoading(true));
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        return () => {
            dispatch(clearData()); // Gọi clearData action khi component unmount
        };
    }, [dispatch, linkHtml, recentState.data]);
    const data = state.data;
    const handleSaveNews = () => {
        const storedArray = JSON.parse(localStorage.getItem("newsSave")) || [];
        const isDataExist = storedArray.some(
            (item) => item.linkHtml === data.linkHtml
        );
        if (!isDataExist) {
            setSaveNews(true);
            storedArray.push(data);
            localStorage.setItem("newsSave", JSON.stringify(storedArray));
            setSaveNews(true);
            toast.info("Lưu bài viết thành công");
        } else {
            dispatch(setIsSave(false));
            const index = storedArray.findIndex(
                (item) => item.linkHtml === data.linkHtml
            );
            if (index > -1) {
                storedArray.splice(index, 1);
                localStorage.setItem("newsSave", JSON.stringify(storedArray));
                setSaveNews(false);
                toast.info("Bỏ lưu bài viết thành công");
            }
        }
    };

    return (
        <div>
            <section className="bg0 p-b-140 p-t-10 margin_top5rem">
                <a href="/home">
                    <h1 className="text-center h1 category-page__name">TLnews</h1>
                </a>
                {state.loading && <Loading></Loading>}
                {!state.loading && state.errorMessage && (
                    <p className="my-5 text-red-400">{state.errorMessage}</p>
                )}
                {data && (
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8 p-b-30">
                                <div className="p-r-10 p-r-0-sr991">
                                    <div className="text-left p-b-70">
                                        <div className="f1-l-3 cl2 p-b-16 p-t-33 respon2 ">
                                            <div dangerouslySetInnerHTML={{ __html: data.title }} />
                                        </div>
                                        <div className="float-left flex-wr-s-s p-b-40">
                      <span className="f1-s-3 cl8 m-r-15 ">
                        <div className="flex items-center f1-s-4 cl8 hov-cl10 trans-03 gap-x-1">
                          <div
                              dangerouslySetInnerHTML={{
                                  __html: data.publishDate,
                              }}
                          />
                          <button
                              onClick={handleSaveNews}
                              className={`hover:text-blue-500 ${
                                  saveNews ? "text-blue-500" : ""
                              } `}
                          >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                              <path
                                  fillRule="evenodd"
                                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                                  clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </span>
                                            <div className="title-description">
                                                <h5
                                                    style={{ fontSize: 17 + "px" }}
                                                    className="f1-l-3 cl2 p-b-16 p-t-33 respon2"
                                                >
                                                    {data.description}
                                                </h5>
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: data.content,
                                                }}
                                                className="detail-content"
                                            />
                                        </div>
                                        <div className="flex-s-s p-t-12 p-b-15"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

export default ReadLink;
