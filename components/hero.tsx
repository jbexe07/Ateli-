"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path d="M16.1 14.3c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.3 1.6c-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6-.2 0-.5 0-.8 0s-.7.1-.9.4c-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.7 3.2 1.4 3.2.9 3.7.9.5 0 1.7-.7 1.9-1.3.2-.7.2-1.3.1-1.4z" />
    </svg>
  )
}

function DressIcon() {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      className="opacity-[0.18]"
    >
      <path
        d="M90 30 C70 30 55 45 55 65 C55 85 65 95 75 105 C80 110 85 120 85 135 L95 135 C95 120 100 110 105 105 C115 95 125 85 125 65 C125 45 110 30 90 30Z"
        stroke="#5A3E35"
        strokeWidth="1.5"
        fill="none"
      />
      <line x1="90" y1="135" x2="90" y2="155" stroke="#5A3E35" strokeWidth="1.5" />
      <line x1="70" y1="150" x2="110" y2="150" stroke="#5A3E35" strokeWidth="1.5" />
      <circle cx="90" cy="55" r="5" stroke="#5A3E35" strokeWidth="1.5" fill="none" />
      <path d="M60 80 Q90 90 120 80" stroke="#5A3E35" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export function Hero() {
  const [visible, setVisible] = useState(false)
  const [badgeVisible, setBadgeVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
      setTimeout(() => setBadgeVisible(true), 400)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="min-h-svh grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden">
      {/* Text */}
      <div
        className={`px-[5%] lg:px-[8%] pt-32 pb-16 lg:pt-32 lg:pb-16 transition-all duration-1000 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
        style={{ transitionDelay: "0.4s" }}
      >
        <div className="text-[0.7rem] tracking-[0.3em] uppercase text-rose mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-rose" />
          Ateliê Feminino
        </div>

        <h1 className="font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] font-light leading-[1.05] text-ink mb-6">
          Elegância
          <br />
          que reflete
          <br />
          <em className="text-rose">sua essência</em>
        </h1>

        <p className="text-[0.95rem] leading-relaxed text-brown-mid max-w-[400px] mb-10">
          Moda feminina modesta e refinada, criada para mulheres que expressam
          identidade, delicadeza e propósito em cada detalhe.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="#colecao"
            className="inline-flex items-center gap-2 bg-rose text-white px-8 py-3.5 rounded-sm text-[0.8rem] font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:bg-rose-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(169,117,98,0.3)]"
          >
            <ArrowRight size={14} />
            Ver coleção
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-brown-light text-brown-mid px-8 py-3.5 rounded-sm text-[0.8rem] font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:border-rose hover:text-rose hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </Link>
        </div>
      </div>

      {/* Visual */}
      <div
        className={`relative h-[60vw] lg:h-svh bg-parchment overflow-hidden transition-all duration-1000 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        style={{ transitionDelay: "0.6s" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#E8D5C8] via-[#D4B5A3] to-rose flex items-center justify-center">
          <DressIcon />
        </div>

        {/* Badge */}
        <div
          className={`absolute bottom-12 left-0 lg:-left-6 bg-white p-5 rounded shadow-[0_12px_40px_rgba(46,31,25,0.12)] transition-all duration-1000 ${
            badgeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "1.2s" }}
        >
          <div className="font-serif text-[2rem] font-semibold text-rose leading-none">
            100%
          </div>
          <div className="text-[0.72rem] text-brown-mid tracking-[0.05em]">
            Peças exclusivas
            <br />e sob medida
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 hidden lg:flex opacity-0 animate-fade-in" style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}>
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-brown-light">
          Rolar
        </span>
        <div className="w-px h-10 bg-rose animate-scroll-line" style={{ animationDelay: "2s" }} />
      </div>
    </header>
  )
}
