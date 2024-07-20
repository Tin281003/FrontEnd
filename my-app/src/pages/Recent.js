import React from "react";
import { NavLink } from "react-router-dom";

const Recent = () =>{
    const data = JSON.parse(localStorage.getItem("newsData")) || [];
    console.log(data);
    return (
        <main id="content">
            <div className="py-6 bg-gray-50">
                <div className="px-3 mx-auto xl:container sm:px-4 xl:px-2">
                    <div className="flex-shrink w-full max-w-full overflow-hidden text-left lg:w-2/3">
                        <div className="flex flex-row flex-wrap -mx-3">
                            <div className="flex-shrink w-full max-w-full px-3">
                                <div className="w-full py-3 mb-4">
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        <span className="inline-block h-5 mr-2 border-red-600 border-l-3"></span>{" "}
                                        Tin đã xem
                                    </h2>
                                </div>
                            </div>
                            {data.length > 0 &&
                                data.map((item) => {
                                    const id = item.linkHtml.replace("https://baotintuc.vn/", "");

                                    return (
                                        <div
                                            key={item.linkHtml}
                                            className="flex-shrink w-full max-w-full px-3 pt-3 pb-3 border-b-2 border-gray-100 border-dotted sm:w-1/3 sm:pt-0 sm:border-b-0"
                                        >
                                            <div className="flex flex-row sm:block hover-img">
                                                <NavLink to={`/news/${id}`}>
                                                    <img
                                                        className="w-full max-w-full mx-auto"
                                                        src={item.avatar}
                                                        alt={item.linkHtml}
                                                    ></img>
                                                </NavLink>
                                                <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                                    <h3 className="mb-2 text-lg font-bold leading-tight">
                                                        <NavLink to={`/news/${id}`}>
                                                            {
                                                                <div
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item.title,
                                                                    }}
                                                                />
                                                            }
                                                        </NavLink>
                                                    </h3>
                                                    <p className="hidden mb-1 leading-tight text-gray-600 md:block">
                                                        {item.description}
                                                    </p>
                                                    <NavLink
                                                        className="text-gray-500 capitalize"
                                                        to={`/news/${id}`}
                                                    >
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Recent