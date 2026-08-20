import { Plus } from "lucide-react";
import { faq } from "@/data/clinica";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            Perguntas frequentes
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Dúvidas comuns antes da consulta
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faq.map((item, i) => (
            <Reveal key={item.pergunta} delay={i * 50}>
              <details className="group rounded-2xl border border-border bg-card px-6 py-5 shadow-soft transition-shadow open:shadow-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-primary [&::-webkit-details-marker]:hidden">
                  {item.pergunta}
                  <Plus
                    className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.resposta}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
