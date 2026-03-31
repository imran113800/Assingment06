import React from 'react';
import banner from '../../assets/banner.png'
import { GiPlainCircle } from "react-icons/gi";
import { FaPlayCircle } from "react-icons/fa";
const Homepage = () => {
    return (
        <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

           
            <div className='flex flex-col justify-center text-center md:text-left'>

                <p className='border rounded-2xl px-3 py-1 w-fit flex items-center gap-2 mx-auto md:mx-0'>
                    <GiPlainCircle />
                    New: AI-Powered Tools Available
                </p>

                <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-5 leading-tight'>
                    Supercharge Your Digital Workflow
                </h1>

                <p className='pt-5 pb-5 text-gray-600 max-w-[500px] mx-auto md:mx-0'>
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>

                <div className='flex flex-col sm:flex-row gap-3 justify-center md:justify-start'>
                    <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
                        Explore Products
                    </button>

                    <button className="btn rounded-2xl flex items-center gap-2 justify-center">
                        <FaPlayCircle /> Watch Demo
                    </button>
                </div>
            </div>

            
            <div className='flex justify-center'>
                <img className='w-full max-w-[400px] md:max-w-[500px]' src={banner} alt="" />
            </div>

        </div>
    );
};

export default Homepage;