import React from "react";
import "../styles/style.css";

const Travel = () => {
    return (
        <div className="margin_top5rem ">
            <h1 className="h1 category-page__name text-center">Du Lịch</h1>
            <div>
                <ul className="flex justify-center ">
                    <li className="">
                        <a className="block py-3 px-6 border-b-2 border-transparent text-lg" href="../am-thuc">Ẩm
                            Thực</a>
                    </li>
                    <li className="">
                        <a className="block py-3 px-6 border-b-2 border-transparent text-lg"
                           href="../giai-tri-sao">Giải trí sao</a>
                    </li>
                    <li className="">
                        <a className="block py-3 px-6 border-b-2 border-transparent text-lg"
                           href="../doi-song-van-hoa"> Đời sống văn hoá</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Culture;
