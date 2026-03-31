import React from 'react';
import user from '../../assets/user.png'
import roket from'../../assets/rocket.png'

const Steps = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 mt-2.5 sm:grid-cols-3 lg:grid-cols-3'>

                <div className="card bg-base-100 w-96 shadow-sm flex flex-col items-center text-center">
                    <img src={user} alt="" className='rounded-full w-[50px] h-[50px] ' />
                    <div className="card-body">
                        <h2 className='font-bold text-2xl'>Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm flex flex-col items-center text-center">
                    <img src={user} alt="" className='rounded-full w-[50px] h-[50px] ' />
                    <div className="card-body">
                        <h2 className='font-bold text-2xl'>Choose Products</h2>
                        <p>Browse our catalog and select the toolsthat fit your needs.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm flex flex-col items-center text-center">
                    <img src={roket} alt="" className='rounded-full w-[50px] h-[50px] ' />
                    <div className="card-body">
                        <h2 className='font-bold text-2xl'>Start Creating</h2>
                        <p>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Steps;