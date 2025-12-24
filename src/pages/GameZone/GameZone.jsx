import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../components/Card'; // Adjust the path based on your folder structure
import { Button } from '../../components/Button'; // Adjust as needed

const GameZone = () => {
  const navigate = useNavigate();

  const games = [
    {
      title: 'Math Quiz',
      description: 'Test your arithmetic skills with a timed quiz.',
      route: '/gamezone/math-quiz',
    },
    {
      title: 'Word Puzzle',
      description: 'Find hidden words and solve word-based challenges.',
      route: '/gamgamezonees/word-puzzle',
    },
    {
      title: 'Memory Match',
      description: 'Match pairs of cards to test your memory.',
      route: '/gamezone/memory-match',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Game Zone</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <Card key={index} className="rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
              <p className="mb-4 text-gray-600">{game.description}</p>
              <Button onClick={() => navigate(game.route)}>Play Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GameZone;
