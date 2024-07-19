import React from "react";
import { NavLink } from "react-router-dom";

const NewsCard = ({ imgSrc, title, content, category, link }) => {
    const id = link.replace("https://baotintuc.vn/", "");
    return (
        <div className="flex-shrink w-full max-w-full px-3 pt-3 pb-3 border-b-2 border-gray-100 border-dotted sm:w-1/3 sm:pt-0 sm:border-b-0">
            <div className="flex flex-row sm:block hover-img">
                <NavLink to={`/news/${id}`}>
                    <img
                        className="w-full max-w-full mx-auto"
                        src={imgSrc}
                        alt="alt title"
                    />
                </NavLink>
                <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                    <h3 className="mb-2 text-lg font-bold leading-tight">
                        <NavLink to={`/news/${id}`}>{title}</NavLink>
                    </h3>
                    <div className="hidden mb-1 leading-tight text-gray-600 md:block">
                        {content}
                    </div>
                    <NavLink className="text-gray-500" to={`/news/${id}`}>
                        <span className="inline-block h-3 mr-2 border-l-2 border-red-600"></span>
                        {category}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
