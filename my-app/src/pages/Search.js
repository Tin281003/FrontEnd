import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchRSSData} from "../features/searchAction";
import {NavLink,useNavigate, useSearchParams} from "react-router-dom";
import PopularPosts from "../components/PopularPosts";
import Loading from "../components/Loading";

const Search = () => {
    const disispatch = useDispatch();
    const state = useSelector((state) => state.search);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    useEffect(() => {
        const keywords = searchParams.get("");
        if (keywords) dispatch(fetchRSSData(keywords));
    }, [searchParams, dispatch, navigate]);
    const keywords = searchParams.get("");
    return(
        <main id="content">
            {state.loading && <Loading></Loading>}
            {!state.loading && state.errorMessage && (
                <p className="my-5 text-red-400">{state.errorMessage}</p>
            )}
            {!state.loading && (
                <div className="py-6 bg-gray-50">
                    <div className="px-3 mx-auto xl:container sm:px-4 xl:px-2">
                        <div className="flex flex-row flex-wrap text-left">
                            <div className="flex-shrink w-full max-w-full overflow-hidden lg:w-2/3">
                                <div className="flex flex-row flex-wrap -mx-3">
                                    <div className="flex-shrink w-full max-w-full px-3">
                                        <div className="w-full py-3 mb-4">
                                            <h2 className="text-3xl font-bold text-gray-800">
                                                <span
                                                    className="inline-block h-5 mr-2 border-red-600 border-l-3"></span>{" "}
                                                Kết quả tìm kiếm cho: <b>"{keywords}"</b>
                                            </h2>
                                        </div>
                                    </div>
                                    {state.data &&
                                        state.data.map((item) => {
                                            return (
                                                <div
                                                    key={item.link}
                                                    className="flex-shrink w-full max-w-full px-3 pt-3 pb-3 border-b-2 border-gray-100 border-dotted sm:w-1/3 sm:pt-0 sm:border-b-0"
                                                >
                                                    <div className="flex flex-row sm:block hover-img">
                                                        <NavLink to={item.link}>
                                                            <img
                                                                className="w-full max-w-full mx-auto"
                                                                src={item.avatar}
                                                                alt={item.title}
                                                            ></img>
                                                        </NavLink>
                                                        <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                                            <h3 className="mb-2 text-lg font-bold leading-tight">
                                                                <NavLink to={item.link}>{item.title}</NavLink>
                                                            </h3>
                                                            <p className="hidden mb-1 leading-tight text-gray-600 md:block">
                                                                {item.description}
                                                            </p>
                                                            <NavLink
                                                                className="text-gray-500 capitalize"
                                                                to={item.link}
                                                            >
                                                                <span
                                                                    className="inline-block h-3 mr-2 border-l-2 border-red-600"></span>
                                                                {item.tags[0]}
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>

                            <PopularPosts dataPopularPost={state.popular}></PopularPosts>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Search;