import React, { useEffect, useReducer, useState } from "react";
import "../styles/style.css";
import "../styles/prism.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const initialState = {
    isSearchOpen: false,
    isMobileNavOpen: false,
};
const headerReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_SEARCH_DROPDOWN":
            return { ...state, isSearchOpen: !state.isSearchOpen };
        case "OPEN_MOBILE_NAV":
            return { ...state, isMobileNavOpen: true };
        case "CLOSE_MOBILE_NAV":
            return { ...state, isMobileNavOpen: false };
        default:
            return state;
    }
};

const Header = () => {
    const [state, dispatch] = useReducer(headerReducer, initialState);

    const toggleDropdown = () => {
        dispatch({ type: "TOGGLE_SEARCH_DROPDOWN" });
    };
    const openMobileNav = () => {
        dispatch({ type: "OPEN_MOBILE_NAV" });
    };
    const closeMobileNav = () => {
        dispatch({ type: "CLOSE_MOBILE_NAV" });
    };
    useEffect(() => {
        // console.log(state.isSearchOpen);
    }, []);
    const [keywords, setKeywords] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (keywords.trim() !== "") {
            navigate(`/search?=${keywords}`);
        }
    };
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="bg-black">
                <div className="px-3 mx-auto xl:container sm:px-4 xl:px-2">
                    <div className="flex justify-between">
                        <NavLink
                            className="flex items-center text-2xl font-bold text-white capitalize mx-w-10"
                            to="home">
                            TLNews
                        </NavLink>

                        <div className="flex flex-row">
                            <ul className="items-center hidden text-sm font-bold text-gray-400 navbar lg:flex lg:flex-row">
                                <li className="relative border-l border-gray-800 active hover:bg-gray-900">
                                    <NavLink
                                        className="block px-6 py-3 border-b-2 border-transparent"
                                        to=""
                                    >
                                        Trang Chủ
                                    </NavLink>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <NavLink
                                        className="block px-6 py-3 border-b-2 border-transparent"
                                        to="the-thao"
                                    >
                                        Thể Thao
                                    </NavLink>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <NavLink
                                        className="block px-6 py-3 border-b-2 border-transparent"
                                        to="du-lich"
                                    >
                                        Du Lịch
                                    </NavLink>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <NavLink
                                        className="block px-6 py-3 border-b-2 border-transparent"
                                        to="cong-nghe"
                                    >
                                        Công Nghệ
                                    </NavLink>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <NavLink
                                        className="block px-6 py-3 border-b-2 border-transparent"
                                        to="kham-pha"
                                    >
                                        Giới Trẻ
                                    </NavLink>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <NavLink
                                        className="block px-6 py-3 border-b-2 border-transparent"
                                        to="kham-pha"
                                    >
                                        More
                                    </NavLink>
                                </li>
                            </ul>

                            <div className="flex flex-row items-center text-gray-300">
                                <div
                                    className={`search-dropdown relative border-r lg:border-l border-gray-800 hover:bg-gray-900 ${
                                        state.isSearchOpen ? "show" : ""
                                    }`}
                                >
                                    <button
                                        className="block px-6 py-3 border-b-2 border-transparent "
                                        onClick={toggleDropdown}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="close bi bi-x-lg"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                            <path d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="open bi bi-search"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                        </svg>
                                    </button>
                                    {state.isSearchOpen && (
                                        <div
                                            className={`dropdown-menu absolute left-auto right-0 top-full z-50 text-left bg-white text-gray-700 border border-gray-100 mt-1 p-3 ${
                                                state.isSearchOpen ? "show" : ""
                                            }`}
                                        >
                                            <form
                                                className="relative flex flex-wrap items-stretch w-full"
                                                onSubmit={handleSubmit}
                                            >
                                                <input
                                                    className="relative flex-1 flex-grow flex-shrink w-px max-w-full px-5 py-2 overflow-x-auto leading-5 text-gray-800 bg-white border border-gray-300 focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                                                    type="text"
                                                    placeholder="Search..."
                                                    value={keywords}
                                                    onChange={(e) => setKeywords(e.target.value)}
                                                ></input>
                                                <div className="flex -mr-px">
                                                    <button
                                                        className="flex items-center px-5 py-2 -ml-1 leading-5 text-gray-100 bg-black hover:text-white hover:bg-gray-900 hover:ring-0 focus:outline-none focus:ring-0"
                                                        type="submit"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            className="bi bi-search"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </div>

                                <div className="relative block hover:bg-gray-800 lg:hidden">
                                    <button
                                        type="button"
                                        className="block px-6 py-3 border-b-2 border-transparent menu-mobile"
                                        onClick={openMobileNav}
                                    >
                                        <span className="sr-only">Mobile menu</span>
                                        <svg
                                            className="inline-block w-6 h-6 mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                                        </svg>{" "}
                                        Menu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div
                className={`side-area fixed w-full h-full inset-0 z-50 ${
                    state.isMobileNavOpen ? "show" : ""
                }`}
            >
                <div className="fixed inset-x-0 top-0 w-full h-full bg-gray-900 back-menu bg-opacity-70">
                    <div
                        className="absolute p-2 text-white cursor-pointer right-64"
                        onClick={closeMobileNav}
                    >
                        <svg
                            className="bi bi-x"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"></path>
                            <path d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"></path>
                        </svg>
                    </div>
                </div>

                <nav
                    id="mobile-nav"
                    className={`side-menu flex flex-col right-0 w-64 fixed top-0 bg-white dark:bg-gray-800 h-full overflow-auto z-40 ${
                        state.isMobileNavOpen ? "show" : ""
                    }`}
                >
                    <div className="mb-auto">
                        <nav className="relative flex flex-wrap">
                            <div className="w-full py-4 font-bold text-center border-b border-gray-100">
                                NEWS
                            </div>
                            <ul id="side-menu" className="flex flex-col float-none w-full">
                                <li className="relative">
                                    <NavLink
                                        to="home"
                                        className="block px-5 py-2 border-b border-gray-100 hover:bg-gray-50"
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li className="relative">
                                    <NavLink
                                        to="the-thao"
                                        className="block px-5 py-2 border-b border-gray-100 hover:bg-gray-50"
                                    >
                                        Thể thao
                                    </NavLink>
                                </li>

                                <li className="relative">
                                    <NavLink
                                        to="du-lich"
                                        className="block px-5 py-2 border-b border-gray-100 hover:bg-gray-50"
                                    >
                                        Du lịch
                                    </NavLink>
                                </li>

                                <li className="relative">
                                    <NavLink
                                        to="cong-nghe"
                                        className="block px-5 py-2 border-b border-gray-100 hover:bg-gray-50"
                                    >
                                        Công nghệ
                                    </NavLink>
                                </li>

                                <li className="relative">
                                    <NavLink
                                        to="kham-pha"
                                        className="block px-5 py-2 border-b border-gray-100 hover:bg-gray-50"
                                    >
                                        Giới trẻ
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
