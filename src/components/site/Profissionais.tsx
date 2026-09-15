import React from "react";
import { clinica, equipePilares, whatsappLink } from "@/data/clinica";
import { Stethoscope, Activity, HeartPulse, CheckCircle2 } from "lucide-react";

export const Profissionais = () => {
  const icones = [Stethoscope, Activity, HeartPulse];

  return (
    <section id="profissionais" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
            Excelência & Cuidado
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            Nossa Estrutura Médica
          </h2>
          <p className="text-slate-400">
            Contamos com um corpo clínico qualificado e focado em oferecer atendimento humanizado e diagnósticos precisos em Manaus.
          </p>
        </div>

        {/* Cards Institucionais da Equipe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipePilares.map((pilar, index) => {
            const Icone = icones[index % icones.length];
            return (
              <div
                key={pilar.id}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                    <Icone className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
                    {pilar.especialidade}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {pilar.titulo}
                  </h3>
                  
                  <p className="text-xs text-slate-400 mb-4 font-mono">
                    {pilar.crm}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {pilar.descricao}
                  </p>
                </div>

                <ul className="space-y-2 border-t border-slate-700/50 pt-6">
                  {pilar.destaques.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Botão de Chamada para Ação */}
        <div className="mt-16 text-center">
          <a
            href={whatsappLink(`Olá! Gostaria de consultar a disponibilidade do corpo clínico na ${clinica.nome}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20"
          >
            Consultar Especialidades e Agendar
          </a>
        </div>

      </div>
    </section>
  );
};

export default Profissionais;
