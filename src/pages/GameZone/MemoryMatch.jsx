import React, { useState, useEffect } from 'react';

const MemoryMatch = () => {
  const cards = ['A', 'B', 'C', 'D', 'E', 'F'];
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    // Shuffle cards when the game starts
    const shuffledCards = [...cards, ...cards].sort(() => Math.random() - 0.5);
    setFlippedCards(shuffledCards.map(() => null));
  }, []);

  const handleCardClick = (index, value) => {
    if (flippedCards[index] !== null || matchedCards.includes(value)) return;

    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = value;
    setFlippedCards(newFlippedCards);

    // Check if two cards are flipped
    const flippedValues = newFlippedCards.filter(card => card !== null);
    if (flippedValues.length === 2) {
      if (flippedValues[0] === flippedValues[1]) {
        setMatchedCards([...matchedCards, flippedValues[0]]);
      }
      setTimeout(() => setFlippedCards(newFlippedCards.map(() => null)), 1000);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Memory Match</h1>
      <div className="grid grid-cols-4 gap-4">
        {flippedCards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index, cards[index])}
            className="w-20 h-20 flex justify-center items-center bg-gray-300 text-3xl cursor-pointer"
          >
            {card || '❓'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryMatch;
