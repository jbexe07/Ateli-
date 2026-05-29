"use client"

import { useEffect, useRef, useState } from "react"

const values = [
  {
    num: "01",
    title: "Identidade",
    desc: "Roupas que contam sua história com autenticidade e refinamento.",
  },
  {
    num: "02",
    title: "Delicadeza",
    desc: "Detalhes que transformam o simples em extraordinário.",
  },
  {
    num: "03",
    title: "Propósito",
    desc: "Moda modesta e elegante, com valores que fazem sentido.",
  },
]

export function Posicionamento() {
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
      className="bg-ink grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-28 px-[5%] lg:px-[8%]"
    >
      <div>
        <div className="text-[0.68rem] tracking-[0.3em] uppercase text-blush mb-4 flex items-center gap-3">
          <span className="w-6 h-px bg-blush" />
          Nossa essência
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.15] text-white">
          Moda com
          <br />
          <em className="text-blush">propósito</em>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-parchment/75 max-w-[440px]">
          Cada peça é criada com intenção — para mulheres que não apenas se
          vestem, mas se expressam através da moda com elegância e identidade.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {values.map((value, i) => (
          <div
            key={value.num}
            className={`flex items-start gap-4 p-6 border border-blush/10 rounded transition-all duration-500 hover:border-blush/35 hover:translate-x-1.5 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="font-serif text-[1.8rem] font-light text-blush leading-none shrink-0 min-w-10">
              {value.num}
            </div>
            <div>
              <div className="text-[0.8rem] font-medium tracking-[0.08em] text-white uppercase mb-1.5">
                {value.title}
              </div>
              <div className="text-[0.85rem] leading-relaxed text-parchment/60">
                {value.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
