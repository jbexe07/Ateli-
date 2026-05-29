"use client"

import { useEffect, useRef, useState } from "react"

const items = [
  { gradient: "from-[#D9BFB0] to-[#C0947B]", tall: true },
  { gradient: "from-sage to-[#6E8A69]" },
  { gradient: "from-[#3A2920] to-brown" },
  { gradient: "from-[#E0D0D6] to-[#C4A8B2]" },
  { gradient: "from-[#D8C9A3] to-[#B4A07A]" },
]

export function Bastidores() {
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
    <section ref={ref} id="bastidores" className="bg-parchment py-24 px-[5%] lg:px-[8%]">
      <div className="mb-12">
        <div className="text-[0.68rem] tracking-[0.3em] uppercase text-rose mb-4 flex items-center gap-3">
          <span className="w-6 h-px bg-rose" />
          Nos bastidores
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.15] text-ink">
          Feito com
          <br />
          <em className="text-rose">cuidado</em>
        </h2>
        <p className="text-[0.9rem] text-brown-mid max-w-[480px] leading-relaxed mt-4">
          Cada peça passa por um processo cuidadoso de seleção e curadoria. Do
          tecido ao detalhe final, tudo é pensado para você.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-2 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`rounded overflow-hidden transition-all duration-700 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
            } ${i === 0 ? "lg:row-span-2 md:col-span-2 lg:col-span-1" : ""}`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div
              className={`w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden group ${
                item.tall ? "min-h-[380px] h-full" : "min-h-[180px]"
              }`}
            >
              <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
