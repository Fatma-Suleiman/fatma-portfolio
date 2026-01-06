import { useState, useEffect } from "react";



export function Footer() {
  return (
    <footer className="bg-black text-slate-100 py-16 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

    <div className="space-y-4">
        <h4 className="font-bold text-lg"> Contact Me</h4>
          <ul className="space-y-2 text-slate-300">
            <li className="hover:text-green-400">fatmasquare71@gmail.com</li>
            <li className="hover:text-green-400">+254 114532154</li>
                  <li className="hover:text-green-400">Nairobi ,Kenya</li>
          </ul>
        </div>


        <div className="space-y-4">
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#about" className="hover:text-green-400">About Me</a></li>
            <li><a href="#project" className="hover:text-green-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>


   
        <div className="space-y-4 text-center">
          <h4 className="font-bold text-lg">By the way… can you beat me?</h4>
          <TicTacToe darkMode={true} />
          
        </div>
      </div>

      <div className="mt-12 text-center text-slate-500 text-lg">
        © 2026 Fatma Suleiman | All Rights Reserved
      </div>
    </footer>
  );
}


export function TicTacToe({ darkMode }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

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
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  useEffect(() => {
    const result = calculateWinner(board);
    const isTie = !result && board.every(cell => cell !== null);

    if ((result || isTie) && !winner) {
      setWinner(
        result === "X" ? "You win" :
        result === "O" ? "Fatma wins" :
        "It's a tie"
      );

      setTimeout(() => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
      }, 2000);
    }
  }, [board, winner]);

  useEffect(() => {
    if (!xIsNext && !winner) {
      const empty = board
        .map((v, i) => (v === null ? i : null))
        .filter(v => v !== null);

      if (empty.length > 0) {
        const move = empty[Math.floor(Math.random() * empty.length)];
        setTimeout(() => {
          const next = board.slice();
          next[move] = "O";
          setBoard(next);
          setXIsNext(true);
        }, 500);
      }
    }
  }, [xIsNext, board, winner]);

  function handleClick(i) {
    if (board[i] || winner || !xIsNext) return;
    const next = board.slice();
    next[i] = "X";
    setBoard(next);
    setXIsNext(false);
  }

  const buttonClass = darkMode
    ? "w-16 h-16 text-2xl font-bold rounded-lg bg-slate-700 text-slate-100 hover:bg-green-600"
    : "w-20 h-20 text-3xl font-bold rounded-lg bg-white border border-slate-300 hover:border-[#00df9a]";

  return (
    <div className="inline-block">
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button key={i} onClick={() => handleClick(i)} className={buttonClass}>
            {cell}
          </button>
        ))}
      </div>
      <div className="mt-2 h-6 text-center">
        {winner ? (
          <p className={`font-semibold ${darkMode ? "text-green-400" : "text-[#00df9a]"}`}>
            {winner}
          </p>
        ) : (
          <p className={darkMode ? "text-slate-300 text-sm" : "text-slate-600"}>
            You are X · Fatma is O
          </p>
        )}
      </div>
    </div>
  );
}