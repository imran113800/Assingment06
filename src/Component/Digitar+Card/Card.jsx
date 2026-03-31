import React from 'react';

const Card = ({ cardinfo }) => {
    console.log(cardinfo)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">

            {
                cardinfo.price <= 35 ? (
                    <h1 className='flex justify-end  border-2'>New</h1>
                ) : cardinfo.price <= 70 ? (
                    <h1>Best Seller</h1>
                ) : (
                    <h1>Popular</h1>
                )
            }

            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title">{cardinfo.name}</h2>
                <p>{cardinfo.description}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Card;