import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { NavLink } from "react-router-dom";

const SliderNews = ({ dataSlider }) => {
    return (
        <div
            className="relative bg-gray-50"
            style={{
                backgroundImage: "url('src/assets/img/bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="bg-black bg-opacity-70">
                <div className="px-3 mx-auto xl:container sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex-shrink w-full max-w-full py-12 overflow-hidden">
                            <div className="w-full py-3">
                                <h2 className="text-2xl font-bold text-white text-shadow-black">
                                    <span className="inline-block h-5 mr-2 border-red-600 border-l-3"></span>
                                    Tin Tức
                                </h2>
                            </div>
                            <Splide
                                options={{
                                    perPage: 3, // Number of slides to show at a time
                                    gap: "1rem", // Gap between slides
                                }}
                            >
                                {dataSlider.map((article, index) => {
                                    const { link, content, title } = article;
                                    const startIndex = content.indexOf('src="') + 5;
                                    const endIndex = content.indexOf('"', startIndex);
                                    const srcValue = content.substring(startIndex, endIndex);
                                    const id = link.replace("https://baotintuc.vn/", "");
                                    return (
                                        <SplideSlide key={link}>
                                            <div className="w-full pb-3">
                                                <div className="bg-white hover-img">
                                                    <NavLink to={`/news/${id}`}>
                                                        <img
                                                            className="w-full max-w-full mx-auto"
                                                            src={srcValue}
                                                            alt="alt title"
                                                        />
                                                    </NavLink>
                                                    <div className="px-6 py-3">
                                                        <h3 className="mb-2 text-lg font-bold leading-tight">
                                                            <NavLink to={`/news/${id}`}>
                                                                {
                                                                    <div
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: title,
                                                                        }}
                                                                    />
                                                                }
                                                            </NavLink>
                                                        </h3>
                                                        <a className="text-gray-500" href={link}>
                                                            <span className="inline-block h-3 mr-2 border-l-2 border-red-600"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </SplideSlide>
                                    );
                                })}
                            </Splide>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderNews;
