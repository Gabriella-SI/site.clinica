import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Sobre } from "@/components/site/Sobre";
import { Especialidades } from "@/components/site/Especialidades";
import { ComoFunciona } from "@/components/site/ComoFunciona";
import { Profissionais } from "@/components/site/Profissionais";
import { Estrutura } from "@/components/site/Estrutura";
import { Depoimentos } from "@/components/site/Depoimentos";
import { Faq } from "@/components/site/Faq";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Localizacao } from "@/components/site/Localizacao";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";
import { clinica, faq } from "@/data/clinica";

const title = "Consultórios Médicos | Clínica em Manaus - AM";
const description =
  "Clínica em Manaus com atendimento humanizado, profissionais especializados e estrutura moderna. Agende sua consulta pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: clinica.nome,
          telephone: clinica.telefone,
          address: {
            "@type": "PostalAddress",
            streetAddress: clinica.endereco,
            addressLocality: clinica.cidade,
            addressRegion: clinica.uf,
            postalCode: clinica.cep,
            addressCountry: "BR",
          },
          openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.pergunta,
            acceptedAnswer: { "@type": "Answer", text: f.resposta },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Sobre />
        <Especialidades />
        <ComoFunciona />
        <Profissionais />
        <Estrutura />
        <Depoimentos />
        <Faq />
        <CtaFinal />
        <Localizacao />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
