"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#colecao", label: "Coleção" },
    { href: "#estilos", label: "Estilos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#bastidores", label: "Bastidores" },
  ]

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[99] bg-ink flex flex-col items-center justify-center gap-10 transition-opacity duration-400 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`font-serif text-[2rem] font-light text-blush tracking-[0.08em] transition-all duration-400 hover:text-white ${
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: mobileOpen ? `${i * 0.05}s` : "0s" }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#"
          onClick={() => setMobileOpen(false)}
          className={`font-serif text-[2rem] font-light text-blush tracking-[0.08em] transition-all duration-400 hover:text-white ${
            mobileOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: mobileOpen ? "0.25s" : "0s" }}
        >
          WhatsApp
        </Link>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-100 px-[5%] py-5 flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? "bg-cream/92 backdrop-blur-xl shadow-[0_1px_0_rgba(90,62,53,0.1)] py-3"
            : ""
        }`}
      >
        <Link
          href="#"
          className="font-serif text-[1.4rem] font-normal text-brown tracking-[0.12em]"
        >
          Iasmin Ateliê
        </Link>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.8rem] font-medium text-brown-mid tracking-[0.12em] uppercase relative pb-0.5 transition-colors duration-300 hover:text-rose group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-rose transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#"
          className="hidden md:block text-[0.75rem] font-medium tracking-[0.12em] uppercase text-white bg-rose px-5 py-2.5 rounded-sm transition-all duration-300 hover:bg-rose-dark hover:-translate-y-0.5"
        >
          WhatsApp
        </Link>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-1 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`w-6 h-[1.5px] bg-brown block transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-brown block transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-brown block transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </nav>
    </>
  )
}
