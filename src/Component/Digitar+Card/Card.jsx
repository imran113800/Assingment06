import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";

const Card = ({ cardinfo, setCard }) => {

  const [isSelected, setIsSelected] = useState(false);

  if (!cardinfo) return null;

  const handleChoosePlayer = () => {
    setIsSelected(true);
    setCard(prev => prev + 1); // ✅ important fix
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">

        <span className="badge badge-xs badge-warning">
          {
            cardinfo.price <= 35 ? "New" :
            cardinfo.price <= 70 ? "Best Seller" :
            "Popular"
          }
        </span>

        <h2 className="text-3xl font-bold">{cardinfo.name}</h2>
        <span className="text-xl">${cardinfo.price}/Mo</span>

        <ul className="mt-4 space-y-2">
          {
            cardinfo.features?.map((feature, index) => (
              <li key={index} className='flex items-center gap-2'>
                <FaCheck className="text-green-500" />
                {feature}
              </li>
            ))
          }
        </ul>

        <button
          onClick={handleChoosePlayer}
          disabled={isSelected}
          className={`btn w-full mt-6 text-white ${
            isSelected 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500"
          }`}
        >
          {isSelected ? "Purchased" : "Buy Now"}
        </button>

      </div>
    </div>
  );
};

export default Card;