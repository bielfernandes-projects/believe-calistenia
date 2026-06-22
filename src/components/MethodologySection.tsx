"use client"

import { useRef, useEffect } from "react"
import { MessageCircle, Dumbbell, Target, Zap } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5585996995533?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es!"

const PILARES = [
  { icon: Zap, title: "Aquecimento", desc: "Preparação articular e ativação para treinar com segurança." },
  { icon: Target, title: "Técnica", desc: "Ensino e correção dos movimentos de cada nível do SGC." },
  { icon: Dumbbell, title: "Circuito", desc: "Treino intenso aplicando fundamentos em alta repetição." },
]

export default function MethodologySection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view")
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="metodologia"
      className="px-5 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Como são as <span className="text-blue-500">aulas</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-body">
            Aulas ministradas por profissionais de educação física especializados
            em calistenia e treinamento funcional, com anos de experiência na
            progressão de alunos do nível iniciante ao avançado.
          </p>
          <p className="mt-4 text-zinc-400 text-body">
            Três pilares estruturam cada aula para evolução consistente e resultados reais.
          </p>
        </div>

        <div ref={gridRef} className="mt-14 grid gap-6 md:grid-cols-3 grid-reveal">
          {PILARES.map((p) => {
            const Icon = p.icon
            const isHighlighted = p.title === "Técnica"
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className={`mx-auto flex size-12 items-center justify-center rounded-full ${
                  isHighlighted ? "bg-blue-500/20" : "bg-blue-500/10"
                }`}>
                  <Icon className={`size-6 ${isHighlighted ? "text-blue-300" : "text-blue-400"}`} />
                </div>
                <h3 className={`mt-4 text-balance text-lg font-semibold ${
                  isHighlighted ? "text-blue-100" : "text-white"
                }`}>{p.title}</h3>
                <p className="mt-2 text-body text-zinc-400">
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 space-y-3 text-center text-sm leading-relaxed text-zinc-500 max-w-2xl mx-auto">
          <p>
            <strong className="text-zinc-300">Segunda, Quarta e Sexta</strong> — treino de <span className="text-blue-400">calistenia pura</span> nivelada visando o aprendizado das skills e da melhora do condicionamento.
          </p>
          <p>
            <strong className="text-zinc-300">Terça e Quinta</strong> — aula{" "}
            <span className="text-blue-400">Livre / Personalizado / Mobilidade</span>,
            com foco em desenvolvimento individual.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-zinc-700 px-7 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
          >
            <MessageCircle className="size-4" />
            Quero mais informações
          </a>
        </div>
      </div>
    </section>
  )
}
