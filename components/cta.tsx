"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

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

export function CTA() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-rose py-28 px-[5%] lg:px-[8%] text-center">
      <div
        className={`max-w-[600px] mx-auto transition-all duration-900 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-[0.68rem] tracking-[0.3em] uppercase text-white/70 mb-4 flex items-center justify-center gap-3">
          <span className="w-6 h-px bg-white/70" />
          Pronta para o próximo passo?
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.15] text-white mb-5">
          Escolha sua
          <br />
          <em>peça ideal</em>
        </h2>
        <p className="text-base text-white/82 leading-relaxed mb-10">
          Fale diretamente comigo e descubra qual modelo combina mais com você.
          Atendimento personalizado e com carinho.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-white text-rose-dark px-8 py-3.5 rounded-sm text-[0.8rem] font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.15)]"
          >
            <WhatsAppIcon />
            Chamar no WhatsApp
          </Link>
          <Link
            href="#colecao"
            className="inline-flex items-center gap-2 border border-white/60 text-white px-8 py-3.5 rounded-sm text-[0.8rem] font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-0.5"
          >
            Ver coleção completa
          </Link>
        </div>
      </div>
    </section>
  )
}
