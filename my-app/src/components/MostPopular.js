import React from "react";

const MostPopular = ({ dataPopular }) => {
    return (
        <div
            className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last"
            style={{ position: "relative" }}
        >
            <div className="w-full bg-white">
                <div className="mb-6">
                    <div className="p-4 bg-gray-100">
                        <h2 className="text-lg font-bold">Most Popular</h2>
                    </div>
                    <ul className="post-number">
                        {/* Sử dụng dữ liệu từ prop dataPopular */}
                        {dataPopular.map((item) => {
                            const link = item.link;
                            const id = link.replace('https://baotintuc.vn/', '');

                            return (
                                <li
                                    key={item.id}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                >
                                    <a
                                        className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                                        href={`/news/${id}`}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MostPopular;
