import { useState, useEffect } from "react";
import { Phone, Github, Linkedin } from "lucide-react";


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-6 py-16">
      <div className="max-w-5xl mx-auto grid gap-16">
        <Hero />
        <ContactCards />
        <ContactForm />
        <GameSection />
      </div>
    </div>
  );
}


function Hero() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Wanna Talk?
      </h1>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        Hello there! Ready to connect and bring ideas to life? Whether you have
        a project in mind, a collaboration to propose, or just want to chat
        about the latest tech trends, I'm all ears. Drop me a line, and let's
        turn pixels into possibilities.
      </p>
    </section>
  );
}


function ContactCards() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      <SocialCard
        icon={<Phone size={28} className="text-[#00df9a]" />}
        title="WhatsApp"
        desc="Fastest way to reach me"
        href="https://wa.me/+254114532154"
      />
      <SocialCard
        icon={<Github size={28} className="text-[#00df9a]" />}
        title="GitHub"
        desc="See what I'm building"
        href="https://github.com/Fatma-Suleiman"
      />
      <SocialCard
        icon={<Linkedin size={28} className="text-[#00df9a]" />}
        title="LinkedIn"
        desc="Let's connect professionally"
        href="https://linkedin.com/in/fatmasuleimansoftwaredeveloper"
      />
    </section>
  );
}


function SocialCard({ icon, title, desc, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl p-6 bg-white border border-slate-200 hover:border-[#00df9a] hover:shadow-lg transition group"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-[#00df9a]/10 transition">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-slate-600 mt-1">{desc}</p>
        </div>
      </div>
    </a>
  );
}


function ContactForm() {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-slate-600 mb-8">
        My inbox is always open. Whether you have a question or just want to say
        hello, I'll try my best to get back to you!
      </p>

      <form
        className="grid gap-4"
        action="mailto:yourmail@example.com"
        method="POST"
        encType="text/plain"
      >
        <input
          className="rounded-lg bg-slate-50 border border-slate-300 p-3 outline-none focus:ring-2 focus:ring-[#00df9a]"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="rounded-lg bg-slate-50 border border-slate-300 p-3 outline-none focus:ring-2 focus:ring-[#00df9a]"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="rounded-lg bg-slate-50 border border-slate-300 p-3 outline-none focus:ring-2 focus:ring-[#00df9a]"
          name="message"
          rows="4"
          placeholder="Your Message"
        />
        <button
          type="submit"
          className="mt-4 rounded-xl bg-[#00df9a] hover:bg-[#00c98a] transition px-6 py-3 font-semibold text-black"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

/* ================= GAME ================= */
function GameSection() {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-3xl font-bold">By the way… can you beat me?</h2>
      <p className="text-slate-600">
        While you're here, try this quick game. You play first.
      </p>
      <TicTacToe />
    </section>
  );
}

function TicTacToe() {
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
        result === "X" ? "You win " :
        result === "O" ? "Fatma wins " :
        "It's a tie 🤝"
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

  return (
    <div className="inline-block">
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-20 h-20 text-3xl font-bold rounded-lg bg-white border border-slate-300 hover:border-[#00df9a]"
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="mt-4 h-6">
        {winner ? (
          <p className="font-semibold text-[#00df9a]">{winner}</p>
        ) : (
          <p className="text-slate-600">You are X · Fatma is O</p>
        )}
      </div>
    </div>
  );
}
