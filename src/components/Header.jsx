import React, { useState } from "react";
import logo from "../assets/logo.png";

/*
  Cambios aplicados desde el actualizado:
  - Se agregó menú responsive (mobile toggle)
  - Se mejoró estructura de navegación usando array (pero sin imports externos)
  - Se mantiene TODO el diseño visual del antiguo
  - Se conserva animación avanzada del slogan
*/

const slogan = "Rico hasta el coto!..";

const navItems = [
  { id: "individual", label: "Individual" },
  { id: "porcion", label: "Porción" },
  { id: "combos", label: "Combos" },
  { id: "pedidos", label: "Pedidos" },
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
      className="bg-gradient-to-r from-[#E63946] via-[#FFB347] to-[#FFD166] shadow-lg transition-shadow duration-500 hover:shadow-2xl animate-slide-down z-30 mb-3"
      style={{
        animation: "slide-down 0.85s cubic-bezier(.73,.17,.24,1.14) 0s both",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">

        {/* SLOGAN */}
        <div className="w-full md:w-auto md:flex-1 flex flex-col md:block">
          <SloganFlash />
        </div>

        {/* LOGO + TITULO */}
        <div className="w-full md:w-auto md:flex-1 flex flex-col items-center justify-center relative">
          <img
            src={logo}
            alt="Pollos Pampeño Logo"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md hover:scale-105 transform transition-transform duration-300 bg-white object-cover animate-flash-once"
            style={{ animation: "flash-once 0.68s 0.45s both" }}
          />
          <span
            className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg mt-2 tracking-wide font-logo animate-title-flash-pop"
            style={{
              fontFamily: "'Bebas Neue', Poppins, sans-serif",
              animation:
                "title-flash-pop 0.9s 0.45s cubic-bezier(.68,1.9,.36,1.08) both",
            }}
          >
            Pollos Pampeño
          </span>
        </div>

        {/* BOTON MOBILE */}
        <div className="md:flex-1 flex items-center justify-end mt-3 md:mt-0">
          <button
            className="md:hidden bg-white/20 text-white border border-white/50 rounded-xl px-3 py-2 font-semibold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "Cerrar" : "Menu"}
          </button>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex gap-6 items-center text-right md:justify-end">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-white hover:text-yellow-100 transition-colors duration-200 flex flex-col items-center group"
              >
                <span className="text-xs font-semibold">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* NAV MOBILE */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-white/40 bg-[#E63946]/95 px-4 py-3 flex flex-col gap-2">
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

      {/* ESTILOS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        .signature-font {
          font-family: 'Great Vibes', 'Dancing Script', 'Pacifico', cursive !important;
        }

        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-64px) scaleY(.96) skewY(-3deg);
          }
          70% {
            opacity: 1;
            transform: translateY(8px) scaleY(1.04) skewY(-2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scaleY(1) skewY(0deg);
          }
        }

        @keyframes flash-once {
          0% {
            opacity: 0.5;
            filter: brightness(1.1) blur(1.5px);
          }
          40% {
            opacity: 1;
            filter: brightness(1.8) blur(.2px);
          }
          100% {
            opacity: 1;
            filter: brightness(1) blur(0);
          }
        }

        @keyframes title-flash-pop {
          0% {
            opacity: 0;
            filter: brightness(1.2) blur(3px);
            transform: scale(0.85) skewY(-5deg);
          }
          30% {
            opacity: 1;
            filter: brightness(2.2) blur(0.5px);
            transform: scale(1.12) skewY(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.85s cubic-bezier(.73,.17,.24,1.14) both;
        }

        .animate-flash-once {
          animation: flash-once 0.68s 0.45s both;
        }

        .animate-title-flash-pop {
          animation: title-flash-pop 0.9s 0.45s cubic-bezier(.68,1.9,.36,1.08) both;
        }
      `}</style>
    </header>
  );
};

export default Header;