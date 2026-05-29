"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-ink flex items-center justify-center flex-col gap-6 transition-all duration-700 ${
        hidden ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
    >
      <div
        className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-blush tracking-[0.25em] opacity-0 translate-y-5 animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        Iasmin Ateliê
      </div>
      <div
        className="w-0 h-px bg-rose animate-expand"
        style={{ animationDelay: "0.8s" }}
      />
    </div>
  )
}
