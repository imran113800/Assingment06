import React from 'react';

const Product = ({ selectedCard, setSelectedCard, card, setCard }) => {
  const handleDeleteSelectedPlayer = (cardinfo) => {
    const filteredplayers = selectedCard.filter(
      p => p.price !== cardinfo.price
    );
    setSelectedCard(filteredplayers);
    setCard(card -
      1);
  }
  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-semibold text-gray-500">
        No Products Available
      </h2>
    </div>
  );
};

export default Product;