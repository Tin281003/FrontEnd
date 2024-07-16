import React from "react";
import {NavLink} from "react-router-dom";

function NewsArticle({article, isMainArticle}){
    const {link, content, title, contentSnippet} = article;
    const startIndex = content.indexOf('src="') +  5;
    const endIndex = content.indexOf('"', startIndex);
    const srcValue = content.substring(startIndex, endIndex);
    const id = link.replace("https://baotintuc.vn/", "");

    return(
        <div className={`flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1 ${
            isMainArticle ? "main-article": ""
        }`}
        >
           <div className="relative overflow-hidden hover-img max-h-98">
               <NavLink to={`/news/${id}`}>
                   <img
                       className="w-full h-auto max-w-full mx-auto"
                       src="srcValue"
                       alt="{title}"
                   />
               </NavLink>
               <div className="absolute bottom-0 w-full px-5 pt-8 pb-5 bg-gradient-cover">
                   <NavLink to={`/new/${id}`}>
                       <h2
                           className={`${
                               isMainArticle
                               ? "text-3xl font-bold capitalize text-trang mb-3"
                               : "text-lg font-bold capitalize leading-tight text-trang mb-1"    
                           }`}
                       >
                           {
                               <div
                                dangerouslySetInnerHTML={{
                                    __html: title,
                                }}
                               />
                           }
                       </h2>
                   </NavLink>
                   {contentSnippet && isMainArticle && (
                       <p className="hidden text-xam-100 sm:inline-block">
                           {contentSnippet}
                       </p>
                   )}
               </div>
           </div>
        </div>
    );
}

export default NewsArticle;