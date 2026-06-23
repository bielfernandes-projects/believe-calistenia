"use client"

import { useRef, useEffect } from "react"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Lucas",
    age: "27",
    text: "Treino há 8 meses e minha evolução foi absurda. Cheguei sem conseguir fazer uma flexão, hoje já consigo fazer várias flexões com inúmeras variações. A metodologia faz toda a diferença.",
  },
  {
    name: "Ana",
    age: "31",
    text: "Sempre odiei academia. Na Believe encontrei um treino que me desafia e me motiva. A comunidade é incrível, virei viciada em calistenia.",
  },
  {
    name: "Rafael",
    age: "24",
    text: "O SGC é o que me segurou. Ver meu progresso nível por nível me faz querer melhorar sempre. Os professores são muito atenciosos.",
  },
  {
    name: "Juliana",
    age: "35",
    text: "Comecei na aula experimental e não parei mais. Hoje treino junto com minha filha na KIDS. Melhor investimento em saúde que já fiz.",
  },
]

export default function TestimonialsSection() {
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
    <section className="px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Quem já treina <span className="text-blue-500">recomenda</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-body">
            Mais de 350 alunos ativos na Believe Calistenia.
          </p>
        </div>

        <div ref={gridRef} className="mt-14 grid gap-6 md:grid-cols-2 grid-reveal">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-body text-zinc-300">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-white">
                {t.name}, {t.age}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
