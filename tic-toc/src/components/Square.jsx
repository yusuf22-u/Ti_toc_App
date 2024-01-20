// Square.js

function Square({ value, onSquareClick, isWinnerSquare }) {
  const active = {
    backgroundColor: isWinnerSquare ? "Green" : "white",
    color: isWinnerSquare ? "white" : "black",
  };

  return (
    <button className="square" style={active} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
