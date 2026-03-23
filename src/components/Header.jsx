import React, { useState } from "react";
import logo from "../assets/logo.png";
import { SECTION_IDS } from "../config/constants";

const slogan = "Rico hasta el coto!..";
const navItems = [
  { id: SECTION_IDS.individual, label: "Individual" },
  { id: SECTION_IDS.porcion, label: "Porcion" },
  { id: SECTION_IDS.combos, label: "Combos" },
  { id: SECTION_IDS.pedidos, label: "Pedidos" },
];

const SloganFlash = () => (
  <div className="w-full flex items-center justify-center md:justify-start md:pl-1 pb-2 md:pb-0 select-none">
    {slogan.split("").map((char, idx) => (
      <span
        key={idx}
        className="signature-font text-xl md:text-2xl lg:text-3xl"
        style={{
          color: "#fff",
          textShadow: "0 1px 8px #e6394677, 0 2px 2px #FFD16655",
          letterSpacing: "0.03em",
          animation: `flash-once 0.5s ${0.45 + 0.045 * idx}s both`,
          display: "inline-block",
          minWidth: char === " " ? "0.6em" : undefined,
          fontFamily: "'Great Vibes', 'Dancing Script', 'Pacifico', cursive",
        }}
      >
        {char}
      </span>
    ))}
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="signature-font text-xl md:text-2xl lg:text-3xl slogan-letter"
style={{
  animationDelay: `${0.45 + 0.045 * idx}s`,
  display: "inline-block",
  minWidth: char === " " ? "0.6em" : undefined,
}}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        
        <div className="w-full md:w-auto md:flex-1 flex flex-col md:block">
          <SloganFlash />
        </div>

        <div className="w-full md:w-auto md:flex-1 flex flex-col items-center justify-center relative">
          <img
            src={logo}
            alt="Pollos Pampeño Logo"

            style={{
              animation: "flash-once 0.68s 0.45s both"
            }}
          />
          <span
            className="
              text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg mt-2 tracking-wide
              font-logo
              animate-title-flash-pop
            "
            style={{
              fontFamily: "'Bebas Neue', Poppins, sans-serif",
              animation: "title-flash-pop 0.9s 0.45s cubic-bezier(.68,1.9,.36,1.08) both"
            }}
          >
            Pollos Pampeño
          </span>
          <button
  className="md:hidden text-white"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
  {isMobileMenuOpen ? "Cerrar" : "Menu"}
</button>
        </div>

        <nav
          className="
            hidden md:flex gap-6 items-center text-right
            animate-flash-once
            md:justify-end md:flex-1
          "
          style={{
            animation: "flash-once 0.68s 0.45s both"
          }}
        >
          <a href="#individual" className="text-white">Individual</a>
          <a href="#porcion" className="text-white">Porción</a>
          <a href="#combos" className="text-white">Combos</a>
          <a href="#pedidos" className="text-white">Pedidos</a>
        </nav>

      </div>
      {isMobileMenuOpen && (
  <nav className="hidden md:flex gap-6">
  {navItems.map((item) => (
    <a key={item.id} href={`#${item.id}`} className="text-white">
      {item.label}
    </a>
  ))}
</nav>
)}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .signature-font {
          font-family: 'Great Vibes', 'Dancing Script', 'Pacifico', cursive !important;
        }
      `}</style>
    </header>
  );
};

export default Header;