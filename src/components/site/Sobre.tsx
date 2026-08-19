import { Quote, ArrowRight } from "lucide-react";
import { clinica, imagens, whatsappLink } from "@/data/clinica";
import { Reveal } from "./Reveal";

const valores = [
  { titulo: "Missão", texto: "Oferecer atendimento de qualidade, com escuta atenta e respeito à individualidade de cada paciente." },
  { titulo: "Valores", texto: "Ética, transparência, acolhimento e cuidado contínuo em todas as etapas do atendimento." },
  { titulo: "Experiência", texto: "[DESCREVA AQUI A TRAJETÓRIA DA CLÍNICA] — espaço reservado para os dados reais da clínica." },
];

export function Sobre() {
  return (
    <section id="a-clinica" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={imagens.atendimento}
              alt="Equipe da clínica recepcionando uma paciente no balcão de atendimento"
              width={900}
              height={700}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </div>
          <div className="mt-4 overflow-hidden rounded-3xl shadow-soft sm:absolute sm:-bottom-10 sm:right-6 sm:mt-0 sm:w-52 sm:border-4 sm:border-background">
            <img
              src={imagens.consultorio}
              alt="Consultório da clínica organizado e iluminado"
              width={900}
              height={700}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={110}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            A clínica
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Um espaço criado para cuidar de você
          </h2>

          <blockquote className="mt-7 rounded-3xl border border-border bg-card p-6 shadow-soft">
            <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
            <p className="mt-3 text-lg font-medium leading-relaxed text-primary">
              “A {clinica.nome} nasceu com o propósito de oferecer atendimento de qualidade, unindo
              conhecimento, tecnologia e cuidado humanizado.”
            </p>
          </blockquote>

          <dl className="mt-8 space-y-5">
            {valores.map((v) => (
              <div key={v.titulo} className="border-l-2 border-accent/50 pl-4">
                <dt className="text-sm font-bold uppercase tracking-wide text-primary">{v.titulo}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.texto}</dd>
              </div>
            ))}
          </dl>

          <a
            href={whatsappLink(`Olá! Gostaria de conhecer melhor a ${clinica.nome}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary-soft"
          >
            Conheça nossa clínica
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
