import { MessageCircle } from "lucide-react";
import { profissionais, whatsappLink } from "@/data/clinica";
import { Reveal } from "./Reveal";

export function Profissionais() {
  return (
    <section id="profissionais" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            Profissionais
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Conheça nossa equipe
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Perfis demonstrativos — substitua por nomes, registros e fotos reais da equipe.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {profissionais.map((p, i) => (
            <Reveal as="li" key={p.nome} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div className="aspect-4/5 overflow-hidden bg-muted">
                  <img
                    src={p.foto}
                    alt={`Retrato de ${p.nome}, ${p.especialidade}`}
                    width={640}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-primary">{p.nome}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent-foreground">{p.especialidade}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wide text-muted-foreground">{p.registro}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">“{p.bio}”</p>
                  <a
                    href={whatsappLink(`Olá! Gostaria de agendar um atendimento com ${p.nome} (${p.especialidade}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-secondary px-5 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Agendar atendimento
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
