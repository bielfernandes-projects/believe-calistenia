"use client"

import { useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import InstagramIcon from "@/components/InstagramIcon"

const NAV_LINKS = [
  { label: "O que é Calistenia", href: "#o-que-e-calistenia" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Horários", href: "#horarios" },
  { label: "SGC", href: "#sgc" },
  { label: "Preços", href: "#experimental" },
  { label: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-wider text-white">BELIEVE</span>
          <span className="text-xs font-semibold tracking-[0.25em] text-zinc-500">CALISTENIA</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5585996995533?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20agendar%20minha%20aula%20experimental!"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-400 active:scale-[0.97]"
          >
            <MessageCircle className="size-4" />
            Agendar Aula Experimental
          </a>
          <a
            href="https://www.instagram.com/believecalistenia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
            aria-label="Instagram"
          >
            <InstagramIcon className="size-5" />
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href="https://wa.me/5585996995533?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20agendar%20minha%20aula%20experimental!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-400 active:scale-[0.97]"
          >
            <MessageCircle className="size-4" />
            Agendar Aula
          </a>
          <a
            href="https://www.instagram.com/believecalistenia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
            aria-label="Instagram"
          >
            <InstagramIcon className="size-5" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-blue-500/10"
            aria-label="Abrir menu"
          >
            {open ? <X className="size-5 text-white" /> : <Menu className="size-5 text-white" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-800/50 bg-zinc-950 px-5 pb-5 pt-3 sm:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
