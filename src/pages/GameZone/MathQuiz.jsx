import React, { useState } from 'react';

const MathQuiz = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    { question: '5 + 3', answer: 8 },
    { question: '12 - 4', answer: 8 },
    { question: '7 * 2', answer: 14 },
    { question: '9 / 3', answer: 3 },
  ];

  const handleAnswer = (userAnswer) => {
    if (userAnswer === questions[questionIndex].answer) {
      setScore(score + 1);
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert(`Your final score is: ${score + 1}`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Math Quiz</h1>
      <div>
        <h2 className="text-xl mb-4">{questions[questionIndex].question}</h2>
        <div className="flex space-x-4">
          {[...Array(4)].map((_, i) => {
            return (
              <button
                key={i}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => handleAnswer(i + 1)}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MathQuiz;
