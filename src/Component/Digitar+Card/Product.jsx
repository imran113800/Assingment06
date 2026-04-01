import React from 'react';

const Product = ({ selectedCard, setSelectedCard, card, setCard }) => {

  const handleDeleteSelectedPlayer = (cardinfo) => {
    const filtered = selectedCard.filter(
      p => p.id !== cardinfo.id
    );
    setSelectedCard(filtered);
    setCard(prev => prev - 1);
  };

  // total price calculate
  const total = selectedCard.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-10 max-w-3xl mx-auto bg-base-100 p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-5 text-left">Your Cart</h2>

      {
        selectedCard.length === 0 ? (
          <p className="text-gray-400 text-center">No Products Selected</p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-3">
              {
                selectedCard.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
                  >
                    <div className="text-left">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>

                    <button
                      onClick={() => handleDeleteSelectedPlayer(item)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))
              }
            </div>

            {/* Total */}
            <div className="flex justify-between mt-5 font-semibold">
              <span>Total:</span>
              <span>${total}</span>
            </div>

            {/* Checkout Button */}
            <button className="btn w-full mt-5 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 text-white">
              Proceed To Checkout
            </button>
          </>
        )
      }

    </div>
  );
};

export default Product;