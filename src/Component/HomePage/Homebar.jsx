import React from 'react';

const Homebar = () => {
    return (
        <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 py-10 items-center">
            <div className="container mx-auto grid grid-cols-3 sm:grid-cols-3 text-center text-white">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">50K+</h1>
                    <p className="text-sm mt-2 text-gray-200">Active Users</p>
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">200+</h1>
                    <p className="text-sm mt-2 text-gray-200">Premium Tools</p>
                </div>   
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">4.9</h1>
                    <p className="text-sm mt-2 text-gray-200">Rating</p>
                </div>
            </div>

        </div>
    );
};

export default Homebar;