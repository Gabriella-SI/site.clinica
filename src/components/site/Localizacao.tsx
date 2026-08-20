import { Clock, Instagram, MapPin, Navigation, Phone } from "lucide-react";
import { clinica } from "@/data/clinica";
import { Reveal } from "./Reveal";

export function Localizacao() {
  return (
    <section id="contato" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            Localização e contato
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Venha nos visitar
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-mint-foreground">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">Endereço</p>
                  <address className="mt-1 text-sm not-italic leading-relaxed text-muted-foreground">
                    {clinica.endereco} — {clinica.bairro}
                    <br />
                    {clinica.cidade} - {clinica.uf}, CEP {clinica.cep}
                  </address>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-mint-foreground">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">Telefone / WhatsApp</p>
                  <a
                    href={`tel:+55${clinica.whatsapp.slice(2)}`}
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {clinica.telefone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-mint-foreground">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-primary">Horários</p>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    {clinica.horarios.map((h) => (
                      <li key={h.dia} className="flex flex-wrap gap-x-2">
                        <span>{h.dia}:</span>
                        <span className="font-medium text-foreground">{h.horario}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-mint-foreground">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">Instagram</p>
                  <a
                    href={clinica.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {clinica.instagram}
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={clinica.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary-soft"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Como chegar
            </a>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-[2rem] border border-border shadow-card">
            <iframe
              src={clinica.mapsEmbed}
              title={`Mapa da localização da ${clinica.nome}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-96 w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
