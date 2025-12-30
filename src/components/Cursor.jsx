import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addActive = () => setActive(true);
    const removeActive = () => setActive(false);

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addActive);
      el.addEventListener("mouseleave", removeActive);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addActive);
        el.removeEventListener("mouseleave", removeActive);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`fixed pointer-events-none rounded-full z-[9999] transition-all duration-100`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          width: active ? "4rem" : "1rem",
          height: active ? "4rem" : "1rem",
          backgroundColor: "rgba(0, 223, 154, 0.3)",
        }}
      />

   
      <div
        className={`fixed pointer-events-none rounded-full border-2 border-[#00df9a] z-[9998] transition-all duration-200`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          width: active ? "6rem" : "4rem",
          height: active ? "6rem" : "4rem",
          opacity: active ? 0.3 : 1,
        }}
      />
    </>
  );
}
