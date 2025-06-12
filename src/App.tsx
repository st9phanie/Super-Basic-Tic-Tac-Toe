import { useEffect, useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { Patterns } from './Patterns'

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");

  const chooseSquare = (square: number) => {
    if (board[square] !== "") return;

    setBoard(prev =>
      prev.map((val, index) => (index === square ? player : val))
    );

    setPlayer(player === "X" ? "O" : "X");
  };

  const checkWin = () => {
    for (const [a, b, c] of Patterns) {
      if (
        board[a] !== "" &&
        board[a] === board[b] &&
        board[b] === board[c]
      ) {
        alert(`${board[a]} wins!`);
        return;
      }

    }
    if (!board.includes("")) return alert("tie")

  };

  const reset = () => {
    setBoard(Array(9).fill(""))
  }

  useEffect(() => {
    checkWin();
  }, [board]);

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <button style={{ background: "teal", color: "white", height: "5%", width: "100px",marginBottom:"40px" }} onClick={reset}>Reset Game</button>

      <div className="board">
        <div className="row">
          <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />

        </div>
        <div className="row">
          <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
          <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
          <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />

        </div>
        <div className="row">
          <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
          <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
          <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />

        </div>
      </div>

    </div>
  )
}

export default App