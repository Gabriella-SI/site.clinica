import { Quote, Star } from "lucide-react";
import { depoimentos } from "@/data/clinica";
import { Reveal } from "./Reveal";

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            Depoimentos
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            O que dizem nossos pacientes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Experiências reais de quem já foi atendido por nossa equipe.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal as="li" key={d.autor} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft">
                <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                  “{d.texto}”
                </blockquote>
                <figcaption className="flex items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="text-sm font-semibold text-primary">{d.autor}</span>
                  <span className="flex gap-0.5" aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
