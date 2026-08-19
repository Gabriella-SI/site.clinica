import { Search, MessageCircle, CalendarCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const etapas = [
  { num: "01", icone: Search, titulo: "Escolha seu atendimento", texto: "Encontre a especialidade ou profissional que você procura." },
  { num: "02", icone: MessageCircle, titulo: "Entre em contato", texto: "Clique no WhatsApp e fale com nossa equipe." },
  { num: "03", icone: CalendarCheck, titulo: "Agende sua consulta", texto: "Escolha o melhor dia e horário disponível." },
];

export function ComoFunciona() {
  return (
    <section className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Agendar é simples em três passos
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-3">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-16 hidden border-t-2 border-dashed border-primary/20 lg:block"
          />
          {etapas.map((etapa, i) => (
            <Reveal as="li" key={etapa.num} delay={i * 110} className="relative">
              <div className="h-full rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-deep text-primary-foreground shadow-soft">
                  <etapa.icone className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs font-bold tracking-[0.25em] text-accent-foreground">
                  {etapa.num}
                </p>
                <h3 className="mt-2 text-lg font-bold text-primary">{etapa.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{etapa.texto}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
