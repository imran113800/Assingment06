import React from 'react';
import Subscription from './Subscription';

const Pricing = ({ subscription }) => {
    return (
        <div>
            <div className='flex flex-col text-center items-center mt-10'>

                <h1 className='font-bold text-5xl pb-2'>Simple, Transparent Pricing</h1>
                <p >Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 container mx-auto sm:grid-cols-2 lg:grid-cols-3'>

                {
                    subscription.map(subscriptions => <Subscription subscriptions={subscriptions}></Subscription>)
                }
            </div>
        </div>
    );
};

export default Pricing;