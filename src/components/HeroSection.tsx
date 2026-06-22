import { Users, MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5585996995533?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20agendar%20minha%20aula%20experimental!"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-sm">
          <Users className="size-3.5 text-blue-400" />
          Junte-se a mais de 350 alunos ativos
        </div>

        <h1 className="animate-fade-up animate-fade-up-d1 text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl md:leading-tight">
          Fuja da rotina da{" "}
          <span className="text-blue-500">academia convencional</span>
        </h1>

        <p className="animate-fade-up animate-fade-up-d2 mt-5 max-w-xl text-body text-zinc-400 md:text-lg">
          Transforme seu corpo com a metodologia Believe Calistenia.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-up animate-fade-up-d3 mt-10 inline-flex items-center gap-3 rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.96]"
        >
          <MessageCircle className="size-5" />
          Agendar Aula Experimental
        </a>
      </div>
    </section>
  )
}
