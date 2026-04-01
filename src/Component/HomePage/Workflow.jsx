import React from 'react';

const Workflow = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 py-20 px-4 text-center text-white">
                <div className="max-w-4xl mx-auto  p-10 rounded-xl">
                    <h1 className="text-4xl font-bold mb-4">
                        Ready To Transform Your Workflow?
                    </h1>
                    <p className="text-sm opacity-90 mb-8">
                        Join thousands of professionals who are already using Digitools to work smarter.
                        <br />
                        Start your free trial today.
                    </p>
                   <div className="flex justify-center gap-4 mb-6">
                        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                            Explore Products
                        </button>
                        <button className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
                            View Pricing
                        </button>
                    </div>
                    <p className="text-xs opacity-80  py-2 rounded-lg">
                        14-day free trial · No credit card required · Cancel anytime
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Workflow;