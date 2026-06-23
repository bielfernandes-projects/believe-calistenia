"use client"

import { useState } from "react"
import { Play, ChevronDown } from "lucide-react"
import { graduationLevels } from "@/data/mock"

const COLOR_MAP: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  zinc: { border: "border-zinc-500/40", bg: "bg-zinc-500/10", text: "text-zinc-300", dot: "bg-zinc-400" },
  yellow: { border: "border-yellow-500/40", bg: "bg-yellow-500/10", text: "text-yellow-300", dot: "bg-yellow-400" },
  orange: { border: "border-orange-500/40", bg: "bg-orange-500/10", text: "text-orange-300", dot: "bg-orange-400" },
  green: { border: "border-green-500/40", bg: "bg-green-500/10", text: "text-green-300", dot: "bg-green-400" },
  blue: { border: "border-blue-500/40", bg: "bg-blue-500/10", text: "text-blue-300", dot: "bg-blue-400" },
  purple: { border: "border-purple-500/40", bg: "bg-purple-500/10", text: "text-purple-300", dot: "bg-purple-400" },
}

export default function GraduationAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="sgc" className="px-5 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Sistema Gradual de <span className="text-blue-500">Calistenia</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-body">
            Evolua nível por nível com exercícios progressivos. Cada faixa
            representa um novo patamar de força e domínio corporal.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {graduationLevels.map((level) => {
            const isOpen = openId === level.id
            const colors = COLOR_MAP[level.color] ?? COLOR_MAP.zinc

            return (
              <div
                key={level.id}
                className={`overflow-hidden rounded-2xl border transition-colors ${isOpen ? colors.border : "border-zinc-800"}`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : level.id)}
                  className={`flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-blue-500/10 ${isOpen ? colors.bg : ""}`}
                >
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl font-bold ${colors.bg} ${colors.text}`}>
                    {level.name}
                  </span>

                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-white">{level.title}</span>
                    <div className="mt-0.5 flex flex-wrap gap-1.5">
                      {level.categories.map((cat) => (
                        <span
                          key={cat.name}
                          className={`rounded-full px-2 py-0.5 text-xs ${colors.bg} ${colors.text}`}
                        >
                          {cat.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ChevronDown
                    className={`size-5 shrink-0 text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
                    <div className="border-t border-zinc-800 px-5 pb-6 pt-4">
                    {level.categories.map((cat) => (
                      <div key={cat.name} className="mb-5 last:mb-0">
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          {cat.name}
                        </h4>
                        <div className="grid gap-1.5 sm:grid-cols-2">
                          {cat.exercises.map((ex) => (
                            <div
                              key={ex.name}
                              className="flex items-center justify-between gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm"
                            >
                              <span className="text-zinc-300">{ex.name}</span>
                              <div className="flex items-center gap-2 shrink-0">
                                <span className="whitespace-nowrap text-xs text-zinc-500">
                                  {ex.reps}
                                </span>
                                <a
                                  href={ex.videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex size-11 items-center justify-center rounded-full bg-zinc-800 text-white transition-colors hover:bg-blue-500"
                                  aria-label={`Ver vídeo: ${ex.name}`}
                                >
                                  <Play className="size-4" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {level.id !== "a6" && (
                    <p className="mt-6 text-xs leading-relaxed text-zinc-600">
                      *Para ser aprovado para o próximo nível, você precisa realizar pelo
                      menos 6 exercícios da lista. Dias, avaliação e valores da graduação
                      devem ser solicitados aos professores.
                    </p>
                    )}
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
