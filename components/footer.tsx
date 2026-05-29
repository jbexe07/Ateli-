import Link from "next/link"

const navLinks = [
  { href: "#colecao", label: "Coleção" },
  { href: "#estilos", label: "Estilos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#bastidores", label: "Bastidores" },
]

const contactLinks = [
  { href: "#", label: "WhatsApp" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "E-mail" },
]

export function Footer() {
  return (
    <footer className="bg-ink py-14 px-[5%] lg:px-[8%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-12 items-start pb-10 border-b border-blush/10 mb-8">
        <div>
          <div className="font-serif text-[1.5rem] font-light text-blush tracking-[0.12em]">
            Iasmin Ateliê
          </div>
          <p className="text-[0.8rem] text-parchment/45 mt-3 leading-relaxed max-w-[260px]">
            Elegância que reflete sua essência. Moda feminina modesta e refinada
            para mulheres com propósito.
          </p>
        </div>

        <div>
          <h4 className="text-[0.68rem] tracking-[0.2em] uppercase text-blush mb-5">
            Navegação
          </h4>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.82rem] text-parchment/50 transition-colors duration-300 hover:text-blush"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.68rem] tracking-[0.2em] uppercase text-blush mb-5">
            Contato
          </h4>
          <ul className="flex flex-col gap-2.5">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[0.82rem] text-parchment/50 transition-colors duration-300 hover:text-blush"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[0.75rem] text-parchment/30">
          © 2025 Iasmin Ateliê. Todos os direitos reservados.
        </p>
        <div className="flex gap-5">
          <Link
            href="#"
            className="text-[0.75rem] tracking-[0.1em] uppercase text-parchment/35 transition-colors duration-300 hover:text-blush"
          >
            Instagram
          </Link>
          <Link
            href="#"
            className="text-[0.75rem] tracking-[0.1em] uppercase text-parchment/35 transition-colors duration-300 hover:text-blush"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </footer>
  )
}
