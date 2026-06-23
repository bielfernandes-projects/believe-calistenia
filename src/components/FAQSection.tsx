"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "O que acontece depois que eu clicar em 'Agendar'?",
    a: "Você será direcionado ao nosso WhatsApp. Um professor vai responder em até 30 minutos em horário comercial para agendar sua aula experimental e tirar todas as suas dúvidas.",
  },
  {
    q: "Preciso de experiência para começar?",
    a: "Não. O SGC (Sistema Gradual de Calistenia) começa no nível A1 — Fundação — que foi desenhado para iniciantes absolutos. Você aprende do zero com exercícios progressivos.",
  },
  {
    q: "O que levar no primeiro dia?",
    a: "Roupas leves de treino e uma garrafa de água. Basta isso — o treino de calistenia é feito de pés descalços. Todo o equipamento (barras, argolas, colchonetes) é fornecido pela Believe.",
  },
  {
    q: "Como funciona a graduação?",
    a: "A cada nível (A1 a A6), você precisa realizar pelo menos 6 exercícios da lista para ser aprovado. As avaliações acontecem periodicamente com os professores.",
  },
  {
    q: "Tem aula experimental mesmo?",
    a: "Sim! Por R$40 você experimenta uma semana completa de treinos. E esse valor é devolvido se você aderir a qualquer plano.",
  },
  {
    q: "Posso congelar ou cancelar o plano?",
    a: "Sim. Planos podem ser congelados por até 30 dias. Cancelamentos seguem a política contratual. Consulte nossos professores para mais detalhes.",
  },
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="border-t border-zinc-800/50 px-5 py-20 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Dúvidas <span className="text-blue-500">frequentes</span>
          </h2>
        </div>

        <div className="mt-14 space-y-2">
          {FAQS.map((faq, i) => {
            const isOpen = openId === i
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-zinc-800"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium transition-colors hover:bg-blue-500/10 ${
                    isOpen ? "text-blue-400" : "text-white"
                  }`}
                >
                  {faq.q}
                  <ChevronDown
                    className={`size-4 shrink-0 text-zinc-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transitionTimingFunction: "var(--ease-out-quart)",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-zinc-800 px-5 pb-4 pt-3">
                      <p className="text-body text-zinc-400">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
