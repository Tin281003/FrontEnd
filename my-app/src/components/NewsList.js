import React from "react";
import NewsCard from "./NewsCard";
const NewsList = ({ dataSection }) => {
    return (
        <div className="flex flex-row flex-wrap">
            {dataSection &&
                dataSection.map((article, index) => {
                    const startIndex = article.content.indexOf('src="') + 5;
                    const endIndex = article.content.indexOf('"', startIndex);
                    const srcValue = article.content.substring(startIndex, endIndex);
                    return (
                        <NewsCard
                            key={article.link}
                            imgSrc={srcValue}
                            title={
                                <div dangerouslySetInnerHTML={{ __html: article.title }} />
                            }
                            content={
                                <div
                                    dangerouslySetInnerHTML={{ __html: article.contentSnippet }}
                                    className={
                                        ("text-gray-600 leading-tight mb-1", "line-clamp-3")
                                    }
                                />
                            }
                            category={article.category}
                            link={article.link}
                        />
                    );
                })}
        </div>
    );
};

export default NewsList;
