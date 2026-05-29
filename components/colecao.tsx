"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const produtos = [
  {
    tag: "Simples",
    nome: "Vestido Sarah",
    gradient: "from-[#DECAB8] to-[#C4977E]",
  },
  {
    tag: "Luxo",
    nome: "Vestido Sarah Luxo",
    gradient: "from-[#CDDAC8] to-sage",
  },
  {
    tag: "Princesa",
    nome: "Princesa Midi",
    gradient: "from-[#D4C5D5] to-[#B09AB2]",
  },
]

export function Colecao() {
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
    <section ref={ref} id="colecao" className="bg-cream py-24 px-[5%] lg:px-[8%]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
        <div>
          <div className="text-[0.68rem] tracking-[0.3em] uppercase text-rose mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-rose" />
            Peças únicas
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.15] text-ink">
            Nossa
            <br />
            <em className="text-rose">Coleção</em>
          </h2>
        </div>
        <p className="text-[0.9rem] text-brown-mid max-w-xs leading-relaxed">
          Cada vestido é escolhido com cuidado para refletir elegância,
          feminilidade e propósito.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto, i) => (
          <div
            key={produto.nome}
            className={`relative overflow-hidden rounded cursor-pointer group transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="aspect-[3/4] bg-parchment overflow-hidden relative">
              <div
                className={`w-full h-full bg-gradient-to-br ${produto.gradient} flex items-center justify-center transition-transform duration-600 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                <Link
                  href="#"
                  className="text-[0.75rem] tracking-[0.15em] uppercase text-white border-b border-white/50 pb-0.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  style={{ transitionDelay: "0.1s" }}
                >
                  Ver detalhes →
                </Link>
              </div>
            </div>
            <div className="pt-4 px-1">
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-rose mb-1">
                {produto.tag}
              </div>
              <div className="font-serif text-[1.3rem] text-ink">
                {produto.nome}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
