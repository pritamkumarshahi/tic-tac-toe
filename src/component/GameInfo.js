import React from "react";

const GameInfo = ({ winner, player }) => {
  return (
    <div className="game-info">
      {winner ? (
        <>
          Winner is{" "}
          <span
            style={{
              color: winner === "X" ? "green" : "red",
              fontFamily: "cursive, sans-serif",
              fontWeight: "900",
              fontSize: "2rem",
            }}
          >
            {winner}
          </span>
        </>
      ) : (
        <>
          Player{" "}
          <span
            style={{
              color: player === 1 ? "green" : "red",
              fontFamily: "cursive, sans-serif",
              fontWeight: "900",
              fontSize: "2rem",
            }}
          >
            {player === 1 ? "X" : "O"}
          </span>
          's turn
        </>
      )}
    </div>
  );
};

export default GameInfo;
