import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRSSData } from "../features/homeNewsAction";
import NewsGrid from "../components/NewsGrid";
import NewsSection from "../components/NewsSection";
import SliderNews from "../components/SliderNews";
import NewsBlock from "../components/NewsBlock";
import Loading from "../components/Loading";
import PopularPosts from "../components/PopularPosts";
const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.homeNews);
  useEffect(() => {
    dispatch(fetchRSSData());
  }, [state.url]);
  return (
    <div className="text-left text-gray-700 pt-9 sm:pt-10">
      {state.loading && <Loading></Loading>}
      {!state.loading && state.errorMessage && (
        <p className="my-5 text-red-400">{state.errorMessage}</p>
      )}
      {!state.loading && (
        <main id="content">
          <NewsGrid newsArticles={state.dataGrid} />
          <div className="py-6 bg-white">
            <div className="px-3 mx-auto xl:container sm:px-4 xl:px-2">
              <div className="flex flex-row flex-wrap">
                <NewsBlock dataBlock={state.dataBlock}></NewsBlock>
                <PopularPosts
                  dataPopularPost={state.dataPopularPost}
                ></PopularPosts>
              </div>
            </div>
          </div>
          <NewsSection dataSection={state.dataSection}></NewsSection>
          <NewsSection dataSection={state.dataSectionSecond}></NewsSection>
          <SliderNews dataSlider={state.dataSlider}></SliderNews>
        </main>
      )}
    </div>
  );
};
export default Home;
