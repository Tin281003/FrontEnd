import React from "react";

const NewsSon = ({dataBlock}) => {
    return(
        <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">

                </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
                {dataBlock &&
                    dataBlock.map((item, index) => {
                        const {link, content, title, contentSnippest} = item;
                        const startIndex = content.indexOf('src="') + 5;
                        const endIndex = content.indexOf('"', startIndex);
                        const srcValue = content.substring(startIndex, endIndex);
                        const id = link.replace('https://baotintuc.vn/', '');
                        if(index === 0){
                            return(
                                <div
                                    className="flex-shrink max-w-full w-full px-3 pb-5"
                                    key={link}>
                                    <div className="relative hover-img max-h-98 overflow-hidden">
                                        <a href={`/news/${id}`}>
                                            <img
                                                className="max-w-full w-full mx-auto h-auto"
                                                src={srcValue}
                                                alt="Image description"
                                            />
                                        </a>
                                        <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                            <a href={`/news/${id}`}>
                                                <h2 className="text-3xl font-bold capitalize text-white mb-3">
                                                    {
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html:title,
                                                            }}
                                                        />
                                                    }
                                                </h2>
                                            </a>
                                        </div>
                                        <div className="text-gray-100 hidden sm:inline-block">
                                            <div
                                                dangerouslySetInnerHTML={{ __html:contentSnippest}}
                                                className={("text-gray-600 leading-tight mb-1", "line-clamp-3")}
                                            />
                                        </div>
                                        <div className="pt-2">
                                            <div className="text-gray-100">
                                                <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}