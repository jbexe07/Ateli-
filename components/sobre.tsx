"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { num: "3+", label: "Anos de ateliê" },
  { num: "200+", label: "Clientes satisfeitas" },
  { num: "100%", label: "Exclusividade" },
]

export function Sobre() {
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
    <section
      ref={ref}
      id="sobre"
      className="bg-cream grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24 px-[5%] lg:px-[8%]"
    >
      {/* Visual */}
      <div
        className={`relative max-w-[400px] lg:max-w-none transition-all duration-900 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <div className="aspect-[3/4] bg-gradient-to-br from-[#E2CBBC] to-[#C49A82] rounded" />
        <div className="hidden lg:flex absolute -bottom-8 -right-8 w-[55%] aspect-square bg-ink rounded items-center justify-center p-8">
          <p className="font-serif text-[1.05rem] italic leading-relaxed text-parchment/85 text-center">
            &quot;Cada detalhe conta uma história de elegância e propósito.&quot;
          </p>
        </div>
      </div>

      {/* Text */}
      <div
        className={`transition-all duration-900 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
        style={{ transitionDelay: "0.2s" }}
      >
        <div className="text-[0.68rem] tracking-[0.3em] uppercase text-rose mb-4 flex items-center gap-3">
          <span className="w-6 h-px bg-rose" />
          A criadora
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.15] text-ink">
          Sobre a
          <br />
          <em className="text-rose">Iasmin</em>
        </h2>
        <p className="text-[0.95rem] leading-relaxed text-brown-mid mt-6">
          A Iasmin Ateliê nasceu de um sonho: vestir mulheres com elegância,
          identidade e valores. Cada peça é escolhida e curada com amor, pensando
          em realçar a beleza única de cada cliente.
        </p>
        <p className="text-[0.95rem] leading-relaxed text-brown-mid mt-4">
          Acreditamos que moda modesta pode ser — e deve ser — elegante, marcante
          e cheia de propósito. Aqui, você encontra peças que respeitam quem você
          é.
        </p>
        <div className="mt-10 flex gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-[2.2rem] font-light text-rose leading-none">
                {stat.num}
              </div>
              <div className="text-[0.75rem] text-brown-light tracking-[0.08em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
