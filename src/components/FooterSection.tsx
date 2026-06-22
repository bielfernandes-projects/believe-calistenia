import Image from "next/image"
import { MessageCircle, MapPin } from "lucide-react"
import InstagramIcon from "@/components/InstagramIcon"

const WHATSAPP_URL =
  "https://wa.me/5585996995533?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20agendar%20minha%20aula%20experimental!"

const MAP_URL =
  "https://www.google.com/maps?q=Rua+Vicente+Leite+1536+Aldeota+Fortaleza+Brazil&output=embed"

export default function FooterSection() {
  return (
    <footer id="contato" className="px-5 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-balance text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
          Onde nos <span className="text-blue-500">encontrar</span>
        </h3>

        <div className="mx-auto mt-8 grid gap-6 md:grid-cols-2">
          <div className="h-80 overflow-hidden rounded-2xl border border-zinc-800">
            <Image
              src="/images/foto-box.png"
              alt="Box Believe Calistenia"
              width={600}
              height={320}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-80 overflow-hidden rounded-2xl border border-zinc-800">
            <iframe
              title="Localização Believe Calistenia"
              src={MAP_URL}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-full w-full"
            />
            <a
              href="https://www.google.com/maps?q=Rua+Vicente+Leite+1536+Aldeota+Fortaleza+Brazil"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-center text-xs text-zinc-500 transition-colors hover:text-blue-400"
            >
              Abrir no Google Maps →
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="text-lg font-bold tracking-wider text-white">
              BELIEVE
            </p>
            <p className="text-xs font-semibold tracking-[0.25em] text-zinc-500">
              CALISTENIA
            </p>
            <p className="mt-3 text-body text-zinc-500">
              Transforme seu corpo com a metodologia Believe Calistenia.
              Treino baseado em ciência e progressão.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500">
              <li>
                <a href="/" className="transition-colors hover:text-blue-400">
                  Calistenia
                </a>
              </li>
              <li>
                <a
                  href="#metodologia"
                  className="transition-colors hover:text-blue-400"
                >
                  Metodologia
                </a>
              </li>
              <li>
                <a
                  href="#horarios"
                  className="transition-colors hover:text-blue-400"
                >
                  Horários
                </a>
              </li>
              <li>
                <a
                  href="#sgc"
                  className="transition-colors hover:text-blue-400"
                >
                  SGC
                </a>
              </li>
              <li>
                <a
                  href="#experimental"
                  className="transition-colors hover:text-blue-400"
                >
                  Preços
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/believecalistenia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-zinc-500 transition-colors hover:text-blue-400 sm:justify-start"
                >
                  <InstagramIcon className="size-4" />
                  @believecalistenia
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-zinc-500 transition-colors hover:text-blue-400 sm:justify-start"
                >
                  <MessageCircle className="size-4" />
                  (85) 99699-5533
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 text-zinc-500 sm:justify-start">
                <MapPin className="size-4 shrink-0" />
                <span className="text-xs">
                  R. Vicente Leite, 1536 — Aldeota, Fortaleza
                </span>
              </li>
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-400 active:scale-[0.97]"
            >
              <MessageCircle className="size-4" />
              Fale Conosco
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-800/50 pt-8 text-center text-xs text-zinc-600">
          &copy; 2026 Believe Calistenia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
