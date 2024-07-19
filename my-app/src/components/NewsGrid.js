import React from "react";
import NewsArticle from "./NewsArticle";
const NewsGrid = ({ newsArticles }) => {
    const mainArticle = newsArticles[0];
    const secondaryArticles = newsArticles.slice(1, 5);
    return (
        <div className="bg-white py-6">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    {/* Render the main news article */}
                    {mainArticle && (
                        <NewsArticle
                            key={mainArticle.link}
                            article={mainArticle}
                            isMainArticle={true}
                        />
                    )}

                    {/* Render the secondary news articles */}
                    <div className="flex-shrink max-w-full w-full lg:w-1/2">
                        <div className="box-one flex flex-row flex-wrap">
                            {secondaryArticles &&
                                secondaryArticles.map((article, index) => (
                                    <NewsArticle
                                        key={article.link}
                                        article={article}
                                        isMainArticle={false}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsGrid;