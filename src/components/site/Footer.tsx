import { HeartPulse } from "lucide-react";
import { clinica, navLinks } from "@/data/clinica";

export function Footer() {
  return (
    <footer className="bg-gradient-deep py-14 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-foreground/10">
                <HeartPulse className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-extrabold tracking-tight">{clinica.nome}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Atendimento humanizado e estrutura moderna em {clinica.cidade} - {clinica.uf}.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
              Navegação
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
              Contato
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic text-primary-foreground/80">
              <p>
                {clinica.endereco} — {clinica.bairro}
              </p>
              <p>
                {clinica.cidade} - {clinica.uf}, {clinica.cep}
              </p>
              <p>{clinica.telefone}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} {clinica.nome}. Todos os direitos reservados. Conteúdo
            informativo, não substitui consulta médica.
          </p>
        </div>
      </div>
    </footer>
  );
}
