import React from "react";
import"../styles/style.css";
const Technology = () =>{
    return(
        <div className="margin_top5rem">
            <h1 className="h1 categogy-page__name text-center">Công Nghệ </h1>
            <div>
                <ul className="flex justify-center">
                    <li className="">
                        <a className="block py-3 px-6 border-b-2 border-transparent text-lg" href="">Sản phẩm công nghệ </a>
                    </li>
                    <li className="">
                        <a className="block py-3 px-6 border-b-2 border-transparent text-lg" href="">Blockchain </a>
                    </li>
                    <li className="">
                        <a className="block py-3 px-6 border-b-2 border-transparent text-lg" href="">Công nghệ Game</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Technology;