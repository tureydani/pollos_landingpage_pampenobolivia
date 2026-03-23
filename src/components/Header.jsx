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
        className="signature-font text-xl md:text-2xl lg:text-3xl slogan-letter"
        style={{
          animationDelay: `${0.45 + 0.045 * idx}s`,
          display: "inline-block",
          minWidth: char === " " ? "0.6em" : undefined,
        }}
      >
        {char}
      </span>
    ))}
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className="bg-gradient-to-r from-primary via-[#d95a3c] to-secondary shadow-soft z-30 mb-3 animate-header-slide"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-auto md:flex-1 flex flex-col md:block">
          <SloganFlash />
        </div>

        <div className="w-full md:w-auto md:flex-1 flex flex-col items-center justify-center relative">
          <img
            src={logo}
            alt="Pollos Pampeño Logo"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md hover:scale-105 transform transition-transform duration-300 bg-white object-cover"
            style={{ animation: "flash-once 0.55s 0.3s both" }}
          />
          <span
            className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg mt-2 tracking-wide font-logo animate-title-pop"
          >
            Pollos Pampeño
          </span>
        </div>

        <div className="md:flex-1 flex items-center justify-end mt-3 md:mt-0">
          <button
            type="button"
            className="md:hidden bg-white/20 text-white border border-white/50 rounded-xl px-3 py-2 font-semibold"
            aria-controls="mobile-nav"
            aria-expanded={isMobileMenuOpen}
            aria-label="Abrir menu de navegacion"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? "Cerrar" : "Menu"}
          </button>

          <nav className="hidden md:flex gap-5 items-center text-right" aria-label="Navegacion principal">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-white hover:text-[#fff3c5] transition-colors duration-200 text-sm font-semibold"
                title={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-white/40 bg-primary/95 px-4 py-3 flex flex-col gap-2"
          aria-label="Navegacion movil"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMobileMenu}
              className="text-white bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

    {/* Animaciones y fuente signature */}
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