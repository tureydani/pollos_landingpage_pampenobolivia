import React from "react";

const WHATSAPP_NUMBER = "59169536433";
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
                  animation: `footer-flash-letter 0.35s ${0.35 + idx * 0.038}s both`
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

        <div className="w-full md:w-auto flex justify-center md:justify-end gap-3" style={{ animation: "footer-flash 0.65s 1.3s both" }}>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD166] text-[#E63946] rounded-full p-2.5 shadow-md hover:-translate-y-0.5 hover:bg-yellow-300 transition-all duration-300"
            aria-label="Whatsapp"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="none" />
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.199-.298.298-.497.099-.198.049-.372-.025-.52-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.099 3.205 5.077 4.366.711.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.125-.272-.198-.57-.347m-5.421 4.731h-.001a8.82 8.82 0 0 1-4.491-1.231l-.322-.192-3.332.874.89-3.24-.209-.332a8.807 8.807 0 0 1-1.352-4.723c.001-4.84 3.941-8.778 8.783-8.778 2.346 0 4.555.917 6.219 2.581a8.706 8.706 0 0 1 2.566 6.204c-.003 4.84-3.942 8.778-8.783 8.778m7.149-15.931a10.569 10.569 0 0 0-7.149-2.732c-5.882 0-10.671 4.785-10.674 10.663a10.61 10.61 0 0 0 1.528 5.555l-1.624 5.928a1.001 1.001 0 0 0 1.216 1.217l5.89-1.57a10.608 10.608 0 0 0 5.636 1.547h.005c5.882 0 10.671-4.785 10.674-10.663a10.48 10.48 0 0 0-3.502-7.945"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD166] text-[#E63946] rounded-full p-2.5 shadow-md hover:-translate-y-0.5 hover:bg-yellow-300 transition-all duration-300"
            aria-label="Instagram"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="6" fill="none" />
              <path
                d="M12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm4.5-8.6a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"
                fill="currentColor"
              />
            </svg>
          </a>
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
          opacity: 0;
          filter: brightness(1.04) blur(1.2px);
          transform: translateY(8px);
        }
        45% {
          opacity: 1;
          filter: brightness(1.2) blur(.2px);
        }
        100% {
          opacity: 1;
          filter: brightness(1) blur(0);
          transform: translateY(0);
        }
      }
      @keyframes footer-flash-letter {
        0% {
          opacity: 0.45;
          filter: brightness(1.08) blur(1.2px);
          transform: scale(0.96) translateY(3px);
        }
        45% {
          opacity: 1;
          filter: brightness(1.25) blur(.15px);
          transform: scale(1.03) translateY(0);
        }
        100% {
          opacity: 1;
          filter: brightness(1) blur(0);
          transform: scale(1) translateY(0);
        }
      }
      .animate-footer-slide-up { animation: footer-slide-up 1s cubic-bezier(.73,.17,.24,1.14) 0s both; }
      .animate-footer-flash { animation: footer-flash 0.65s both; }

      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  </footer>
);

export default Footer;