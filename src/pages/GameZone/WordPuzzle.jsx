import React, { useState } from 'react';

const WordPuzzle = () => {
  const words = ['education', 'learning', 'school', 'student'];
  const [shuffledWord, setShuffledWord] = useState('');

  const shuffleWord = (word) => {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  };

  const handleSubmit = (userGuess) => {
    if (userGuess.toLowerCase() === shuffledWord.toLowerCase()) {
      alert('Correct!');
    } else {
      alert('Try again!');
    }
  };

  const randomWord = words[Math.floor(Math.random() * words.length)];
  const scrambledWord = shuffleWord(randomWord);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Word Puzzle</h1>
      <div>
        <h2 className="text-xl mb-4">Unscramble the word: {scrambledWord}</h2>
        <input
          type="text"
          placeholder="Your guess"
          className="p-2 border mb-4"
          onChange={(e) => setShuffledWord(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handleSubmit(shuffledWord)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default WordPuzzle;
