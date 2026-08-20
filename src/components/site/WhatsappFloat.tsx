import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/clinica";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-4 text-sm font-semibold text-accent-foreground shadow-float transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Agendar no WhatsApp</span>
    </a>
  );
}
