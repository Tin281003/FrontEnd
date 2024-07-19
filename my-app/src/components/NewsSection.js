import React from "react";
import NewsList from "./NewsList";

const NewsSection = ({ dataSection }) => {
    return (
        <div className="bg-white">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                {/* Phần tin tức */}
                <div className="max-w-full w-full overflow-hidden">
                    <div className="w-full py-3">
                        <h2 className="text-gray-800 text-2xl font-bold">
                            <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                            Tiêu biểu
                        </h2>
                    </div>
                    {/* Danh sách card tin tức */}
                    <NewsList dataSection={dataSection}></NewsList>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
