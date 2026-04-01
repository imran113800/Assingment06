import React, { useState } from 'react';
import Cardinfo from './Cardinfo';
import Product from './Product';

const DigitalTools = ({ productData, setCard, card }) => {
  const [selectedType, setSelectedType] = useState("Product");
  const [selectedCard,setSelectedCard]=useState([])

  return (
    <div className='text-center mt-15'>
      <h1 className='font-bold text-5xl pt-10'>
        Premium Digital Tools
      </h1>

      <p className='pt-3'>
        Choose from our curated collection of premium digital products
      </p>

      <div className="flex justify-center gap-4">
        <button
          className={`btn mt-5 w-[120px] ${
            selectedType === "Product"
              ? "bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 text-white"
              : ""
          }`}
          onClick={() => setSelectedType("Product")}
        >
          Product

        </button>

        <button
          className={`btn mt-5 w-[120px] ${
            selectedType === "Card"
              ? "bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 text-white"
              : ""
          }`}
          onClick={() => setSelectedType("Card")}
        >
          Cards ({card}) 
        </button>
      </div>

      <div className="mt-10">
        {
          selectedType === "Product"
            ? <Cardinfo 
                productData={productData} 
                setCard={setCard} 
                card={card}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard} 
              />
            : <Product selectedCard={selectedCard} setSelectedCard={setSelectedCard} card={card} setCard={setCard}/>
        }
      </div>
    </div>
  );
};

export default DigitalTools;