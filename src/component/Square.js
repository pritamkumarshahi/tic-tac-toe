const Square = ({ column, value, onClick, isWinning }) => {
  return (
    <div
      className={`row-tic-tack-${column + 1} ${value === "X" ? "x" : value === "O" ? "o" : ""} ${
        isWinning ? "winning" : ""
      }`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Square;
