import React from 'react';
import Card from './Card';

const Cardinfo = ({ productData }) => {

    return (
        <div className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
            {
                productData.map(cardinfo => (
                    <Card key={cardinfo.id} cardinfo={cardinfo} />
                ))
            }
        </div>
    );
};

export default Cardinfo;