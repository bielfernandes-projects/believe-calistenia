"use client"

import { MessageCircle, Clock } from "lucide-react"
import { scheduleData } from "@/data/mock"

const WHATSAPP_URL =
  "https://wa.me/5585996995533?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es!"

function classColor(name: string) {
  if (name === "Calistenia") return "bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-500/20"
  if (name === "Aulão") return "bg-blue-400/10 text-blue-300 ring-1 ring-inset ring-blue-400/20"
  if (name === "KIDS") return "bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20"
  return ""
}

export default function ScheduleSection() {
  return (
    <section
      id="horarios"
      className="border-t border-zinc-800/50 px-5 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Grade de <span className="text-blue-500">Horários</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-body">
            Confira nossos horários e encontre o melhor momento para treinar. O agendamento de cada aula é feito previamente pelo aplicativo Next Fit.
          </p>
        </div>

        {/* Mobile accordion */}
        <div className="mt-14 grid gap-3 sm:hidden">
          {scheduleData.map((day) => (
            <details
              key={day.day}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-white transition-colors hover:text-blue-400">
                <span>{day.dayShort}</span>
                <span className="text-xs text-zinc-500 group-open:hidden">
                  {day.classes.filter((c) => c.name !== "-").length} aulas
                </span>
                <span className="hidden text-xs text-blue-400 group-open:inline">
                  fechar
                </span>
              </summary>
              <div className="space-y-1 px-5 pb-4">
                {day.classes
                  .filter((c) => c.name !== "-")
                  .map((c) => (
                    <div
                      key={`${c.time}-${c.name}`}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${classColor(c.name)}`}
                    >
                      <Clock className="size-3.5 shrink-0" />
                      <span className="font-medium">{c.time}</span>
                      <span className="text-zinc-500">—</span>
                      <span>{c.name}</span>
                    </div>
                  ))}
              </div>
            </details>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="mt-14 hidden overflow-x-auto sm:block">
          <div className="grid min-w-[700px] grid-cols-6 gap-3">
            {scheduleData.map((day) => (
              <div
                key={day.day}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50"
              >
                <div className="border-b border-zinc-800 px-3 py-3 text-center">
                  <p className="text-sm font-semibold text-white">{day.dayShort}</p>
                </div>
                <div className="space-y-1 p-2">
                  {day.classes.map((c) => (
                    <div
                      key={`${c.time}-${c.name}`}
                      className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs ${
                        c.name === "-"
                          ? "text-zinc-700"
                          : `${classColor(c.name)}`
                      }`}
                    >
                      <span className="font-medium shrink-0">{c.time}</span>
                      <span className="truncate">
                        {c.name === "-" ? (
                          <span className="text-zinc-700">—</span>
                        ) : (
                          c.name
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
