import { MessageCircle, Phone } from "lucide-react";
import { clinica, whatsappLink } from "@/data/clinica";
import { Reveal } from "./Reveal";

export function CtaFinal() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-deep px-7 py-14 text-center shadow-card sm:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
              Pronto para cuidar da sua saúde com quem cuida de verdade?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/80">
              Agende sua consulta pelo WhatsApp e receba atendimento rápido da nossa equipe.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-card px-7 py-4 text-sm font-semibold text-primary shadow-card transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Agendar pelo WhatsApp
              </a>
              <a
                href={`tel:+55${clinica.whatsapp.slice(2)}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {clinica.telefone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
