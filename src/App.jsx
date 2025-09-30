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
  const [isX, setX] = useState(true)
  function handleClick(index) {
    if (squares[index]) { return; }
    const copySquares = squares.slice();
    if (isX) {
      copySquares[index] = "X";
    }
    else{copySquares[index] = "O";}
    setSquares(copySquares);
    setX(!isX);
  }
  return (
    <div className="bg-gray-300 p-4 rounded-2xl grid grid-cols-3 grid-rows-3 gap-4">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
