import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function restartGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function undoMove() {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
    }
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            square={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <button className="glow-on-hover" onClick={restartGame}>
            Restart
          </button>
          <button
            className="glow-on-hover"
            onClick={undoMove}
            disabled={currentMove === 0}
          >
            Undo
          </button>
        </div>
      </div>
    </>
  );
}
