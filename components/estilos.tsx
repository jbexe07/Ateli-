"use client"

import { useEffect, useRef, useState } from "react"

const estilos = [
  {
    tag: "Estilo 01",
    nome: "Simples",
    desc: "Leve, delicado e ideal para o dia a dia com charme natural.",
    bg: "bg-gradient-to-br from-[#EAD8CB] to-[#D4B8A5]",
  },
  {
    tag: "Estilo 02",
    nome: "Luxo",
    desc: "Elegante e refinado, pensado para ocasiões que merecem destaque.",
    bg: "bg-gradient-to-br from-[#3A2920] to-[#6B4A3C]",
    dark: true,
  },
  {
    tag: "Estilo 03",
    nome: "Princesa",
    desc: "Marcante, feminino e encantador — para quem quer ser inesquecível.",
    bg: "bg-gradient-to-br from-[#C8BECD] to-[#9B8FA2]",
  },
]

export function Estilos() {
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
    <section ref={ref} id="estilos" className="bg-parchment py-24 px-[5%] lg:px-[8%]">
      <div className="mb-14">
        <div className="text-[0.68rem] tracking-[0.3em] uppercase text-rose mb-4 flex items-center gap-3">
          <span className="w-6 h-px bg-rose" />
          Para cada momento
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.15] text-ink">
          Três <em className="text-rose">estilos</em>,
          <br />
          uma essência
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5">
        {estilos.map((estilo, i) => (
          <div
            key={estilo.nome}
            className={`relative overflow-hidden aspect-[4/5] group transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div
              className={`w-full h-full ${estilo.bg} transition-transform duration-600 group-hover:scale-[1.04]`}
            />
            <div
              className={`absolute bottom-0 left-0 right-0 p-6 lg:p-7 ${
                estilo.dark
                  ? "bg-gradient-to-t from-[#140804]/85 to-transparent"
                  : "bg-gradient-to-t from-[#1E0F08]/75 to-transparent"
              }`}
            >
              <div className="text-[0.62rem] tracking-[0.25em] uppercase text-blush mb-2">
                {estilo.tag}
              </div>
              <div className="font-serif text-[1.6rem] font-light text-white mb-2">
                {estilo.nome}
              </div>
              <div className="text-[0.8rem] leading-relaxed text-white/70">
                {estilo.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
