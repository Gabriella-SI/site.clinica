import { ArrowRight } from "lucide-react";
import { galeria, whatsappLink, clinica } from "@/data/clinica";
import { Reveal } from "./Reveal";

export function Estrutura() {
  return (
    <section id="estrutura" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            Estrutura
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Um ambiente pensado para o seu conforto
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={galeria.principal.src}
              alt={galeria.principal.alt}
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full min-h-72 w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {galeria.secundarias.map((img, i) => (
              <Reveal key={img.alt} delay={i * 80} className="overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-full min-h-36 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={whatsappLink(`Olá! Gostaria de conhecer a estrutura da ${clinica.nome}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-0.5 hover:bg-secondary"
          >
            Conhecer nossa estrutura
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
