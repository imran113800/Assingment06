import React from "react";

const Navbar = ({card}) => {
    return (
        <div className="w-full border-b">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <h1 className="text-2xl font-bold text-purple-600">
                    DigiTools
                </h1>


                <ul className="hidden md:flex items-center gap-8 text-gray-700">
                    <li className="hover:text-purple-600 cursor-pointer">Products</li>
                    <li className="hover:text-purple-600 cursor-pointer">Features</li>
                    <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
                    <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
                </ul>


                <div className="flex items-center gap-6">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        <span className="badge badge-sm indicator-item">{card}</span>
                    </div>
                    <button className="text-gray-700 hover:text-purple-600">
                        Login
                    </button>

                    <button className="bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;