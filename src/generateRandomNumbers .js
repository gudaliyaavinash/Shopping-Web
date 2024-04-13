import React, { useState, useEffect } from 'react';

const generateRandomNumbers = () => {
  const numbers = Array.from({ length: 8 }, (_, index) => index + 1);
  numbers.push(null); // Representing the empty space
  return numbers.sort(() => Math.random() - 0.5);
};

const PuzzleGame = () => {
  const [board, setBoard] = useState(generateRandomNumbers);

  useEffect(() => {
    // Check for win condition
    if (board.every((number, index) => (number === null || number === index + 1))) {
      document.write('Congratulations! You won!');
      setBoard(generateRandomNumbers());
    }
  }, [board]);

  const handleTileClick = (index) => {
    const emptyIndex = board.indexOf(null);
    const adjacentIndices = getAdjacentIndices(emptyIndex);

    if (adjacentIndices.includes(index)) {
      const newBoard = [...board];
      [newBoard[index], newBoard[emptyIndex]] = [newBoard[emptyIndex], newBoard[index]];
      setBoard(newBoard);
    }
  };

  const getAdjacentIndices = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;

    const adjacentIndices = [];

    if (row > 0) adjacentIndices.push(index - 3); // Top
    if (row < 3) adjacentIndices.push(index + 3); // Bottom
    if (col > 0) adjacentIndices.push(index - 1); // Left
    if (col < 3) adjacentIndices.push(index + 1); // Right

    return adjacentIndices;
  };

  return (
    <div>
      <h1>Number Puzzle Game</h1>
      <div className="board">
        {board.map((number, index) => (
          <div
            key={index}
            className={`tile ${number === null ? 'empty' : ''}`}
            onClick={() => handleTileClick(index)}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PuzzleGame;
