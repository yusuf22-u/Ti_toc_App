// Board.js

import { useState } from "react";
import Square from "./Square";
import Status from "./Status";

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return { winner: square[a], line: [a, b, c] };
    }
    // console.log("low", lines[a]);
  }
  return null;
}

export default function Board({ xIsNext, square, onPlay }) {
  const winnerInfo = calculateWinner(square);

  const isWinnerSquare = (index) => {
    return winnerInfo && winnerInfo.line.includes(index);
  };

  const handleClick = (i) => {
    if (square[i] || winnerInfo) {
      return;
    }

    const nextSquares = square.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  return (
    <div className="main">
      <div className="status">
        <Status winnerInfo={winnerInfo} square={square} xIsNext={xIsNext} />
      </div>
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div className="board-row" key={row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <Square
                  key={index}
                  value={square[index]}
                  onSquareClick={() => handleClick(index)}
                  isWinnerSquare={isWinnerSquare(index)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
