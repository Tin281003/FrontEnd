import React from "react";
const Footer = () => {
    return(
        <div>
            <footer className="bg-den text-xam-400">
                <div
                id = "footer-content"
                className="relative pt-8 xl:pt-16 pb-6 xl:pb-12"
                >
                    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
                        <div className= "flex flex-wrap flex-row lg:justify-between -mx-3">
                            <div className="flex-shrik max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
                                <div className="flex items-center mb-2">
                                    <span className="text-3xl leading-normal mb-2 font-bold text-xam-100 mt-2">
                                        TLNews
                                    </span>
                                </div>
                                <p>
                                    TLNews Template for build great newspaper, magazine and news portal.
                                </p>
                                <ul className="space-x-3 mt-6 mb-6 Lg:mb-0">
                                    <li className="inline-block">
                                        <a
                                            target = "_blank"
                                            className="hover:text-xam-100"
                                            rel="noopener noreferrer"
                                            href="https//facebook.com"
                                            title="Facebook"
                                        >
                                            <i className="fab fa-facebook fa-2x"></i>
                                        </a>
                                    </li>

                                    <li className="inline-block">
                                        <a
                                            target="_blank"
                                            className="hover:text-xam-100"
                                            rel="noopener noreferrer"
                                            href="https://twitter.com"
                                            title="Twitter"
                                        >
                                            <i className="fab fa-twitter fa-2x"></i>
                                        </a>
                                    </li>

                                    <li className="inline-block">
                                        <a
                                            target="_blank"
                                            className="hover:text-xam-100"
                                            rel="noopener noreferrer"
                                            href="https://youtube.com"
                                            title="Youtube"
                                        >
                                            <i className="fab fa-youtube fa-2x"></i>
                                        </a>
                                    </li>
                                    <li classNameclassName="inline-block">
                                        <a
                                            target="_blank"
                                            className="hover:text-xam-100"
                                            rel="noopener noreferrer"
                                            href="https://instagram.com"
                                            title="Instagram"
                                        >
                                            <i className="fab fa-instagram fa-2x"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
                                <div className="flex flex-wrap flex-now">
                                    <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                                        <h4 className="text-base leading-normal mb-3 uppercase text-xam-100">
                                            Product
                                        </h4>
                                        <ul>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Landing</a>
                                            </li>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Sections</a>
                                            </li>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Sign up</a>
                                            </li>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Login</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex-shrink max-w-full w-1/2 md:w1/4 mb-6 lg:mb-0">
                                        <h4 className="text-base leading-normal mb-3 uppercase text-xam-100">
                                            Support
                                        </h4>
                                        <ul>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Changelog</a>
                                            </li>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Tools</a>
                                            </li>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Icons</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                                        <h4 className="text-base leading-normal mb-3 uppercase text-xam-100">
                                            Includes
                                        </h4>
                                        <ul>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Utilities</a>
                                            </li>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Components</a>
                                            </li>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Example code</a>
                                            </li>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Updates</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                                        <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">
                                            Legal
                                        </h4>
                                        <ul>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Privacy Policy</a>
                                            </li>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">Terms of Use</a>
                                            </li>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">License</a>
                                            </li>
                                            <li className="py-1 hover:text-trang">
                                                <a href="#">GDPR</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-dark">
                        <div className="container py-4 border-t border-xam-200 border-opacity-10">
                            <div className="row">
                                <div className="col-12 col-md text-center">
                                    <div className="d-block my-3">
                                        Copyright © Your Company | All rights reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;