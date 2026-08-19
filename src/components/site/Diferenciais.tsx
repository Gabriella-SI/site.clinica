import { HeartHandshake, GraduationCap, Sofa, CalendarCheck } from "lucide-react";
import { clinica } from "@/data/clinica";
import { Reveal } from "./Reveal";

const itens = [
  { icone: HeartHandshake, titulo: "Atendimento humanizado", texto: "Cada paciente recebe atenção individualizada." },
  { icone: GraduationCap, titulo: "Equipe especializada", texto: "Profissionais qualificados para oferecer atendimento de qualidade." },
  { icone: Sofa, titulo: "Estrutura confortável", texto: "Ambientes planejados para proporcionar uma experiência mais tranquila." },
  { icone: CalendarCheck, titulo: "Agendamento fácil", texto: "Entre em contato e encontre o melhor horário para seu atendimento." },
];

export function Diferenciais() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            Diferenciais
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Por que escolher a {clinica.nome}?
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {itens.map((item, i) => (
            <Reveal as="li" key={item.titulo} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-mint-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icone className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.texto}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
