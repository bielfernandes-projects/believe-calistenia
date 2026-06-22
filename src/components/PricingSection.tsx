"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Gift } from "lucide-react"
import { pricingData } from "@/data/mock"

const EXPERIMENTAL_URL =
  "https://wa.me/5585996995533?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20agendar%20minha%20aula%20experimental!"

const INFO_URL =
  "https://wa.me/5585996995533?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es!"

const padrao = pricingData.filter((p) => p.type === "padrao")
const credito = pricingData.filter((p) => p.type === "credito-recorrente")

function fmtPrice(n: number) {
  return `R$ ${n.toFixed(2).replace(".", ",")}`
}

interface MergedPlan {
  name: string
  badges: string[]
  highlighted?: boolean
  padrao: (typeof padrao)[number] | null
  credito: (typeof credito)[number] | null
}

const mergedPlans: MergedPlan[] = [
  {
    name: "Mensal",
    badges: [],
    padrao: padrao.find((p) => p.id === "mensal") ?? null,
    credito: null,
  },
  {
    name: "Trimestral",
    badges: padrao.find((p) => p.id === "trimestral")?.badges ?? [],
    highlighted: true,
    padrao: padrao.find((p) => p.id === "trimestral") ?? null,
    credito: credito.find((p) => p.id === "credito-trimestral") ?? null,
  },
  {
    name: "Semestral",
    badges: [],
    padrao: padrao.find((p) => p.id === "semestral") ?? null,
    credito: credito.find((p) => p.id === "credito-semestral") ?? null,
  },
  {
    name: "Anual",
    badges: padrao.find((p) => p.id === "anual")?.badges ?? [],
    padrao: padrao.find((p) => p.id === "anual") ?? null,
    credito: credito.find((p) => p.id === "credito-anual") ?? null,
  },
]

function PlanCard({ plan }: { plan: MergedPlan }) {
  const hasBoth = plan.padrao && plan.credito

  return (
    <div
      className={`group relative rounded-2xl border bg-zinc-900/50 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 ${
        plan.highlighted ? "border-blue-500/50" : "border-zinc-800"
      }`}
    >
      {plan.badges.length > 0 && (
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-blue-500 px-4 py-0.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20">
            {plan.badges[0]}
          </span>
        </div>
      )}

      <h3 className="text-balance text-lg font-semibold text-white">{plan.name}</h3>

      {plan.padrao && (
        <div className="mt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">
              {fmtPrice(plan.padrao.installmentPrice)}
            </span>
            <span className="text-sm text-zinc-500">/mês</span>
          </div>
          <p className="mt-0.5 text-xs text-zinc-500">
            {plan.padrao.installments}x de {fmtPrice(plan.padrao.installmentPrice)} — Padrão
          </p>
          {plan.padrao.discountPercent > 0 && (
            <p className="mt-0.5 text-xs font-medium text-emerald-400">
              Desconto de {plan.padrao.discountPercent}%
            </p>
          )}
        </div>
      )}

      {hasBoth && (
        <div className="mt-2 border-t border-zinc-800 pt-2">
          <p className="text-xs text-zinc-500">
            ou {plan.credito!.installments}x de{" "}
            <span className="text-zinc-300">{fmtPrice(plan.credito!.installmentPrice)}</span>
            /mês — Crédito Recorrente
          </p>
          {plan.credito!.discountPercent > 0 && (
            <p className="mt-0.5 text-xs font-medium text-emerald-400">
              Desconto de {plan.credito!.discountPercent}%
            </p>
          )}
        </div>
      )}

      <div className="mt-6">
        <a
          href={INFO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
        >
          <MessageCircle className="size-4" />
          Quero mais informações
        </a>
      </div>
    </div>
  )
}

export default function PricingSection() {
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
      id="precos"
      className="px-5 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Invista no seu <span className="text-blue-500">corpo</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-body">
            Comece com uma aula experimental e escolha o plano ideal para você.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-md rounded-2xl border border-blue-500/30 bg-blue-500/[0.04] p-8 text-center shadow-xl shadow-blue-500/5">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            Aula Experimental
          </p>
          <p className="mt-2 text-5xl font-bold text-white">
            R$ <span className="text-blue-400">40</span>
          </p>

          <div className="mx-auto mt-6 max-w-sm rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4 text-left">
            <div className="flex items-center gap-2 text-amber-400">
              <Gift className="size-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Presente / Bônus
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-400">
              <li>
                <span className="text-zinc-300">→</span> Fez na{" "}
                <span className="text-amber-300">Segunda</span>? Ganha{" "}
                <span className="text-amber-300">Quarta</span> e{" "}
                <span className="text-amber-300">Sexta</span> da mesma semana.
              </li>
              <li>
                <span className="text-zinc-300">→</span> Fez na{" "}
                <span className="text-amber-300">Quarta</span>? Ganha{" "}
                <span className="text-amber-300">Sexta</span> da mesma semana.
              </li>
            </ul>
          </div>

          <p className="mt-4 text-xs text-zinc-600">
            *Valor da aula experimental devolvido na adesão de qualquer plano.
          </p>

          <a
            href={EXPERIMENTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-blue-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-400 active:scale-[0.97]"
          >
            <MessageCircle className="size-4" />
            Agendar Aula Experimental
          </a>
        </div>

        <div className="mt-24">
          <div ref={gridRef} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 grid-reveal">
            {mergedPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={INFO_URL}
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
