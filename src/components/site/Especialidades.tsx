import {
  Stethoscope,
  HeartPulse,
  Sparkles,
  Flower2,
  Baby,
  Apple,
  Brain,
  Smile,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { especialidades, whatsappLink } from "@/data/clinica";
import { Reveal } from "./Reveal";

const icones: Record<string, LucideIcon> = {
  Stethoscope,
  HeartPulse,
  Sparkles,
  Flower2,
  Baby,
  Apple,
  Brain,
  Smile,
};

export function Especialidades() {
  return (
    <section id="especialidades" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            Especialidades
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Especialidades para diferentes momentos da sua saúde
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {especialidades.map((esp, i) => {
            const Icone = icones[esp.icone] ?? Stethoscope;
            return (
              <Reveal as="li" key={esp.nome} delay={(i % 4) * 80}>
                <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-primary">{esp.nome}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {esp.descricao}
                  </p>
                  <a
                    href={whatsappLink(`Olá! Gostaria de saber mais sobre a especialidade de ${esp.nome}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-soft transition-colors hover:text-primary"
                  >
                    Saiba mais
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
