import { Check, MessageCircle, ShieldCheck, Clock, MapPin } from "lucide-react";
import { clinica, imagens, whatsappLink } from "@/data/clinica";
import { Reveal } from "./Reveal";

const beneficios = ["Profissionais especializados", "Atendimento humanizado", "Estrutura moderna"];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-hero pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-mint blur-3xl opacity-60"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-soft shadow-soft">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Cuidado, experiência e atendimento humanizado
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Sua saúde merece um cuidado que olha para você.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Na {clinica.nome}, você encontra profissionais especializados, atendimento humanizado e
            uma estrutura preparada para oferecer uma experiência segura e confortável.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:bg-primary-soft"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Agendar minha consulta
            </a>
            <a
              href="#a-clinica"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-secondary"
            >
              Conhecer a clínica
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {beneficios.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/25 text-mint-foreground">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={imagens.hero}
              alt="Profissional de saúde em atendimento acolhedor a uma paciente em consultório moderno"
              width={1408}
              height={1104}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="mt-4 grid gap-3 sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:w-64">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-card backdrop-blur">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-mint-foreground">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-primary">Agenda flexível</p>
                <p className="truncate text-xs text-muted-foreground">Seg. a sex., 08h às 18h</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-card backdrop-blur">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-mint-foreground">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-primary">
                  {clinica.cidade} · {clinica.uf}
                </p>
                <p className="truncate text-xs text-muted-foreground">{clinica.bairro}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
