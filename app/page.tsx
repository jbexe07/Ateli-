import { Loader } from "@/components/loader"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Posicionamento } from "@/components/posicionamento"
import { Colecao } from "@/components/colecao"
import { Estilos } from "@/components/estilos"
import { Sobre } from "@/components/sobre"
import { Bastidores } from "@/components/bastidores"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Divider } from "@/components/divider"

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Posicionamento />
        <Divider />
        <Colecao />
        <Estilos />
        <Sobre />
        <Divider />
        <Bastidores />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
