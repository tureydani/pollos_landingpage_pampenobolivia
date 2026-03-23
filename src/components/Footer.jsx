import React from "react";

// Cambia este número por tu WhatsApp real:
const WHATSAPP_NUMBER = "59169536433"; // <--- AQUÍ PONES TU NÚMERO

// Footer animado y colorido, con efectos acordes al header
const Footer = () => (
  <footer
    className="relative overflow-hidden bg-[#E63946] border-t-2 border-[#FFD166] text-white py-8 mt-6
      shadow-inner transition-shadow duration-500 hover:shadow-lg
      animate-footer-slide-up"
    style={{
      animation: "footer-slide-up 1s cubic-bezier(.73,.17,.24,1.14) 0s both"
    }}
  >
    <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden="true">
      <div className="absolute -top-20 -left-8 h-52 w-52 rounded-full bg-[#FFD166] blur-3xl" />
      <div className="absolute -bottom-28 right-2 h-64 w-64 rounded-full bg-[#f77f00] blur-3xl" />
    </div>

    <div className="relative max-w-6xl mx-auto px-4">
      <div className="grid gap-6 md:grid-cols-3 items-center pb-6 border-b border-[#ffd16666]">
      <div className="text-center md:text-left" style={{ animation: "footer-flash 0.65s 0.65s both" }}>
        <p className="text-[0.74rem] uppercase tracking-[0.2em] text-[#FFE6A8] font-semibold mb-2">Pollos Pampeño</p>
        <div className="text-xl sm:text-2xl tracking-wide drop-shadow-lg font-extrabold italic text-[#FFF1C8] leading-none">
          {"¡Rico hasta el coto!".split("").map((char, idx) =>
            char === " " ? (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  width: "0.52em",
                  minWidth: "0.52em"
                }}
              >
                &nbsp;
              </span>
            ) : (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  animation: `footer-flash-letter 0.35s ${0.8 + idx * 0.045}s both`
                }}
              >
                {char}
              </span>
            )
          )}
        </div>
        <p className="mt-3 text-sm text-[#FFE6A8]">Sabor casero, doradito perfecto y delivery listo para salir.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2" style={{ animation: "footer-flash 0.65s 0.82s both" }}>
        <span className="px-3 py-1.5 rounded-full bg-[#ffd16620] border border-[#ffd16670] text-[#FFF3D4] text-xs font-semibold tracking-wide">Delivery rapido</span>
        <span className="px-3 py-1.5 rounded-full bg-[#ffd16620] border border-[#ffd16670] text-[#FFF3D4] text-xs font-semibold tracking-wide">Porciones generosas</span>
        <span className="px-3 py-1.5 rounded-full bg-[#ffd16620] border border-[#ffd16670] text-[#FFF3D4] text-xs font-semibold tracking-wide">Atencion con carino</span>
      </div>

      <div className="flex justify-center md:justify-end" style={{ animation: "footer-flash 0.65s 1.05s both" }}>
        <a
          href="/delivery"
          className="bg-[#FFD166] text-[#B32632] font-extrabold px-6 py-2.5 rounded-full shadow-lg hover:bg-[#ffcb4f] hover:-translate-y-0.5 transition-all duration-300 border border-[#FFE7A0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          Pide tu Delivery
        </a>
      </div>
      </div>

      <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="w-full md:w-auto text-center md:text-left text-xs text-[#FFD166] animate-footer-flash" style={{ animation: "footer-flash 0.65s 1.2s both" }}>
          © {new Date().getFullYear()} <span className="font-semibold">Pollos Pampeño</span>. Todos los derechos reservados.
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <span className="block w-32 h-1 rounded-full bg-[#FFD166] animate-pulse" />
        </div>
      </div>
    </div>
    <style>{`
      @keyframes footer-slide-up {
        0% {
          opacity: 0;
          transform: translateY(48px) scaleY(.92) skewY(2deg);
        }
        72% {
          opacity: 1;
          transform: translateY(-6px) scaleY(1.04) skewY(-2deg);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scaleY(1) skewY(0deg);
        }
      }
      @keyframes footer-flash {
        0% {
          opacity: 0.0; filter: brightness(1.1) blur(2px);
        }
        45% {
          opacity: 1; filter: brightness(2.2) blur(.2px);
        }
        100% {
          opacity: 1; filter: brightness(1) blur(0);
        }
      }
      @keyframes footer-flash-letter {
        0% {
          opacity: 0.35; filter: brightness(1.2) blur(2px);
          transform: scale(0.85) rotate(-2deg);
        }
        45% {
          opacity: 1; filter: brightness(2.5) blur(.2px);
          transform: scale(1.12) rotate(3deg);
        }
        100% {
          opacity: 1; filter: brightness(1) blur(0);
          transform: scale(1) rotate(0deg);
        }
      }
      .animate-footer-slide-up { animation: footer-slide-up 1s cubic-bezier(.73,.17,.24,1.14) 0s both; }
      .animate-footer-flash { animation: footer-flash 0.65s both; }
    `}</style>
  </footer>
);

export default Footer;