import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-20 h-20 bg-white hover:bg-gray-100 border-2 border-gray-300 rounded-lg text-5xl font-bold text-gray-700 hover:text-blue-600 transition duration-200 shadow-md hover:shadow-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setX] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Turn : " + (isX ? "X" : "O");
  }
  function playAgain() {
    setSquares(Array(9).fill(null));
  }
  function handleClick(index) {
    if (squares[index] || winner) {
      return;
    }
    const copySquares = squares.slice();
    if (isX) {
      copySquares[index] = "X";
    } else {
      copySquares[index] = "O";
    }
    setSquares(copySquares);
    setX(!isX);
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-center font-bold text-4xl text-white mb-3">
        {status}
      </h1>
      <div className="bg-gray-300 p-4 rounded-2xl grid grid-cols-3 grid-rows-3 gap-4">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button
        className="px-2 py-2 bg-blue-600 text-white font-semibold rounded-lg  text-2xl shadow-md hover:bg-blue-700 transition mt-4"
        onClick={playAgain}
      >
        Play Again
      </button>
    </div>
  );

  function calculateWinner(squares) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}
