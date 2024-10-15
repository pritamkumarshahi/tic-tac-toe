// TicTac.js
import React, { useState } from "react";
import Square from "./Square";
import GameInfo from "./GameInfo";

import "../styles/TicTac.css";

const TicTac = ({ squares }) => {
  const [square, setSquares] = useState(squares);
  const [player, setPlayer] = useState(1); // 1 for "X" and 0 for "O"
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  // Loading sound effects
  const moveSound = new Audio("game-move.mp3");
  const winSound = new Audio("game-over.mp3");

  const calculateWinner = (squares) => {
    const possibleWinPosition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < possibleWinPosition.length; i++) {
      const [a, b, c] = possibleWinPosition[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (square[i] || gameOver) return;

    const newSquare = square.slice();
    newSquare[i] = player === 1 ? "X" : "O";

    setSquares(newSquare);
    moveSound.play();
    const currentWinner = calculateWinner(newSquare);

    if (currentWinner) {
      setWinner(currentWinner);
      setGameOver(true);
      winSound.play();
    } else {
      setPlayer((prev) => (prev === 1 ? 0 : 1));
    }
  };

  // Reset the game
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setPlayer(1);
    setGameOver(false);
    setWinner("");
  };

  return (
    <div className="tic-tac-container-wrapper">
      <div className="tic-tac-container">
        {[0, 1, 2].map((row) => (
          <div className={`tic-tac-row-${row + 1}`} key={row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <Square key={index} column={col} value={square[index]} onClick={() => handleClick(index)} />
              );
            })}
          </div>
        ))}

        <GameInfo winner={winner} player={player} />
        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTac;
