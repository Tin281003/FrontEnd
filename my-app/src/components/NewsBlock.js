import React from "react";
import { NavLink } from "react-router-dom";

const NewsBlock = ({ dataBlock }) => {
    return (
        <div className="flex-shrink w-full max-w-full overflow-hidden lg:w-2/3">
            <div className="w-full py-3">
                <h2 className="text-2xl font-bold text-gray-800">
                    <span className="inline-block h-5 mr-2 border-red-600 border-l-3"></span>
                    Nóng
                </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
                {dataBlock &&
                    dataBlock.map((item, index) => {
                        const { link, content, title, contentSnippet } = item;
                        const startIndex = content.indexOf('src="') + 5;
                        const endIndex = content.indexOf('"', startIndex);
                        const srcValue = content.substring(startIndex, endIndex);
                        const id = link.replace("https://baotintuc.vn/", "");
                        if (index === 0) {
                            return (
                                <div
                                    className="flex-shrink w-full max-w-full px-3 pb-5"
                                    key={link}
                                >
                                    <div className="relative overflow-hidden hover-img max-h-98">
                                        {/*thumbnail*/}
                                        <NavLink to={`/news/${id}`}>
                                            <img
                                                className="w-full h-auto max-w-full mx-auto"
                                                src={srcValue}
                                                alt=""
                                            />
                                        </NavLink>
                                        <div className="absolute bottom-0 w-full px-5 pt-8 pb-5 bg-gradient-cover">
                                            {/*title*/}
                                            <NavLink to={`/news/${id}`}>
                                                <h2 className="mb-3 text-3xl font-bold text-white capitalize">
                                                    {
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: title,
                                                            }}
                                                        />
                                                    }
                                                </h2>
                                            </NavLink>
                                            <div className="hidden text-gray-100 sm:inline-block">
                                                <div
                                                    dangerouslySetInnerHTML={{ __html: contentSnippet }}
                                                    className={
                                                        ("text-gray-600 leading-tight mb-1", "line-clamp-3")
                                                    }
                                                />
                                            </div>
                                            {/* author and date */}
                                            <div className="pt-2">
                                                <div className="text-gray-100">
                                                    <div className="inline-block h-3 mr-2 border-l-2 border-red-600"></div>
                                                    {/* {item.author} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={link}
                                    className="flex-shrink w-full max-w-full px-3 pt-3 pb-3 border-b-2 border-gray-100 border-dotted sm:w-1/3 sm:pt-0 sm:border-b-0"
                                >
                                    <div className="flex flex-row sm:block hover-img">
                                        <NavLink to={`/news/${id}`}>
                                            <img
                                                className="w-full max-w-full mx-auto"
                                                src={srcValue}
                                                alt="alt title"
                                            />
                                        </NavLink>
                                        <div className="py-0 pl-3 sm:py-3 sm:pl-0">
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
                                            <div className="hidden mb-1 leading-tight text-gray-600 md:block">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: contentSnippet,
                                                    }}
                                                    className={
                                                        ("text-gray-600 leading-tight mb-1", "line-clamp-3")
                                                    }
                                                />
                                            </div>
                                            <div className="text-gray-500" href="#">
                                                <span className="inline-block h-3 mr-2 border-l-2 border-red-600"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
            </div>
        </div>
    );
};

export default NewsBlock;
