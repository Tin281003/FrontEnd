import React from "react";
import "../styles/style.css";
const Sport = () => {
    return(
        <div className="margin_top5rem ">
            <h1 className="h1 category-page__name text-center">Thể Thao</h1>
            <div>
                <ul className="flex justify-center ">
                    <li className="">
                        <a className="block py-3 px-6 border-b-2 border-transparent text-lg" href="../sea-games-32">Sea Game 32</a>
                    </li>
                    <li className="">
                        <a  className="block py-3 px-6 border-b-2 border-transparent text-lg" href="../bong-ro">Bóng rổ</a>
                    </li>
                    <li className="">
                        <a className="block py-3 px-6 border-b-2 border-transparent text-lg" href="../the-thao-khac">Thể thao khác</a>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Sport;
