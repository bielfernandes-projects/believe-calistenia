import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5585996995533?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20tirar%20d%C3%BAvidas!"

export default function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Tirar dúvidas pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/40 active:scale-90 sm:bottom-6 sm:right-6 sm:size-16"
    >
      <MessageCircle className="size-6 sm:size-7" />
      <span className="absolute inset-0 animate-ping rounded-full bg-blue-500/20 opacity-75 group-hover:animate-none" />
    </a>
  )
}
