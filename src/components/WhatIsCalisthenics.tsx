import Image from "next/image"
import { Check } from "lucide-react"

const BENEFITS = [
  "Ganho de força proporcional ao peso corporal",
  "Articulações mais saudáveis e resistentes",
  "Treinos em qualquer lugar, sem dependência de equipamentos",
  "Resultados estéticos com baixo risco de lesão",
]

export default function WhatIsCalisthenics() {
  return (
    <section id="o-que-e-calistenia" className="border-t border-zinc-800/50 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
              O que é{" "}
              <span className="text-blue-500">Calistenia</span>?
            </h2>
            <p className="mt-4 text-body text-zinc-400">
              Calistenia é o treino que usa o peso do próprio corpo como
              resistência. Diferente das academias convencionais — onde
              máquinas e cabos fazem grande parte do trabalho por você — na
              calistenia cada movimento exige que seu corpo inteiro trabalhe
              em sinergia.
            </p>
            <p className="mt-3 text-body text-zinc-400">
              O resultado é um desenvolvimento muscular mais funcional,
              articulações mais preparadas e um corpo que aprende a se mover
              com eficiência e controle.
            </p>

            <ul className="mt-6 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="mt-0.5 size-4 shrink-0 text-blue-400" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800">
            <Image
              src="/images/calistenia-foto.png"
              alt="Alunos treinando Believe Calistenia"
              width={600}
              height={750}
              className="aspect-square w-full object-cover md:aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
