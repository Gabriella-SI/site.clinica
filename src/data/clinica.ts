// ============================================================
// DADOS DA CLÍNICA — altere aqui para personalizar todo o site
// ============================================================

import hero from "@/assets/hero.jpg";
import recepcao from "@/assets/recepcao.jpg";
import consultorio from "@/assets/consultorio.jpg";
import espera from "@/assets/espera.jpg";
import fachada from "@/assets/fachada.jpg";
import equipamentos from "@/assets/equipamentos.jpg";
import atendimento from "@/assets/atendimento.jpg";
import prof1 from "@/assets/prof-1.jpg";
import prof2 from "@/assets/prof-2.jpg";
import prof3 from "@/assets/prof-3.jpg";

export const clinica = {
  nome: "Consultórios Médicos",
  cidade: "Manaus",
  uf: "AM",
  endereco: "Av. Tarumã, 1169",
  bairro: "Praça 14 de Janeiro",
  cep: "69025-040",
  telefone: "(92) 99265-0654",
  whatsapp: "5592992650654",
  instagram: "@consultoriosmedicos",
  instagramUrl: "https://instagram.com/",
  horarios: [
    { dia: "Segunda a sexta", horario: "08h às 18h" },
    { dia: "Sábado", horario: "08h às 12h" },
    { dia: "Domingo e feriados", horario: "Fechado" },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Tarum%C3%A3,+1169+-+Pra%C3%A7a+14+de+Janeiro,+Manaus+-+AM,+69025-040",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Tarum%C3%A3,+1169+-+Pra%C3%A7a+14+de+Janeiro,+Manaus+-+AM,+69025-040&output=embed",
};

export const mensagemWhatsapp = `Olá! Gostaria de agendar uma consulta na ${clinica.nome}. Poderiam me informar os horários disponíveis?`;

export const whatsappLink = (mensagem: string = mensagemWhatsapp) =>
  `https://wa.me/${clinica.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#a-clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const especialidades = [
  { nome: "Clínica Geral", icone: "Stethoscope", descricao: "Avaliação completa, acompanhamento e orientação para o seu dia a dia." },
  { nome: "Cardiologia", icone: "HeartPulse", descricao: "Cuidado com a saúde do coração e acompanhamento preventivo." },
  { nome: "Dermatologia", icone: "Sparkles", descricao: "Saúde e cuidado da pele, cabelos e unhas em todas as fases." },
  { nome: "Ginecologia", icone: "Flower2", descricao: "Acompanhamento da saúde da mulher com acolhimento e privacidade." },
  { nome: "Pediatria", icone: "Baby", descricao: "Atenção ao crescimento e desenvolvimento das crianças." },
  { nome: "Nutrição", icone: "Apple", descricao: "Planos alimentares individualizados para diferentes objetivos." },
  { nome: "Psicologia", icone: "Brain", descricao: "Espaço seguro para cuidar da saúde mental e emocional." },
  { nome: "Odontologia", icone: "Smile", descricao: "Saúde bucal com atendimento cuidadoso e preventivo." },
];

export const profissionais = [
  {
    nome: "Dra. Ana Carolina",
    especialidade: "Dermatologista",
    registro: "CRM [NÚMERO]",
    bio: "Profissional dedicada ao atendimento individualizado e à promoção da saúde.",
    foto: prof1,
  },
  {
    nome: "Dr. Rafael Mendes",
    especialidade: "Cardiologista",
    registro: "CRM [NÚMERO]",
    bio: "Atendimento voltado à prevenção e ao acompanhamento contínuo do paciente.",
    foto: prof2,
  },
  {
    nome: "Dra. Juliana Prado",
    especialidade: "Clínica Geral",
    registro: "CRM [NÚMERO]",
    bio: "Escuta atenta e cuidado integral em cada etapa do tratamento.",
    foto: prof3,
  },
];

export const galeria = {
  principal: { src: recepcao, alt: "Recepção da clínica com balcão de atendimento e ambiente iluminado" },
  secundarias: [
    { src: consultorio, alt: "Consultório médico equipado e organizado" },
    { src: espera, alt: "Área de espera com poltronas confortáveis e plantas" },
    { src: equipamentos, alt: "Equipamentos médicos modernos em sala de atendimento" },
    { src: fachada, alt: "Fachada da clínica em dia ensolarado" },
  ],
};

export const imagens = { hero, atendimento, recepcao, consultorio, espera, fachada, equipamentos };

export const depoimentos = [
  { texto: "Fui muito bem atendida desde o primeiro contato. A equipe é atenciosa e o ambiente é excelente.", autor: "Mariana S." },
  { texto: "Consegui agendar pelo WhatsApp em poucos minutos. Atendimento rápido e muito organizado.", autor: "Carlos E." },
  { texto: "O profissional explicou tudo com calma e paciência. Saí da consulta muito mais tranquila.", autor: "Fernanda L." },
  { texto: "Estrutura limpa, confortável e uma recepção que realmente acolhe quem chega.", autor: "Paulo R." },
  { texto: "Levei meu filho e fomos tratados com muito carinho. Recomendo para outras famílias.", autor: "Tatiane M." },
  { texto: "Pontualidade no horário marcado e cuidado em cada detalhe do atendimento.", autor: "Rodrigo A." },
];

export const faq = [
  { pergunta: "Como faço para agendar uma consulta?", resposta: "O agendamento pode ser feito pelo WhatsApp ou por telefone. Nossa equipe verifica a disponibilidade da especialidade desejada e confirma o melhor dia e horário para você." },
  { pergunta: "Quais especialidades estão disponíveis?", resposta: "Trabalhamos com diferentes especialidades, como Clínica Geral, Cardiologia, Dermatologia, Ginecologia, Pediatria, Nutrição, Psicologia e Odontologia. Consulte nossa equipe para confirmar a agenda de cada profissional." },
  { pergunta: "A clínica atende convênios?", resposta: "As informações sobre convênios atendidos podem ser confirmadas diretamente com nossa equipe pelo WhatsApp ou telefone." },
  { pergunta: "Existe atendimento particular?", resposta: "Sim. O atendimento particular está disponível e os valores podem ser consultados com nossa equipe antes do agendamento." },
  { pergunta: "Quais são os horários de funcionamento?", resposta: "Atendemos de segunda a sexta, das 08h às 18h, e aos sábados das 08h às 12h. Horários específicos variam conforme a agenda de cada profissional." },
  { pergunta: "Onde a clínica está localizada?", resposta: `Estamos na ${clinica.endereco}, ${clinica.bairro}, ${clinica.cidade} - ${clinica.uf}, CEP ${clinica.cep}.` },
  { pergunta: "Posso agendar pelo WhatsApp?", resposta: "Sim. O WhatsApp é a forma mais rápida de agendar: basta clicar em qualquer botão de agendamento desta página e falar diretamente com nossa equipe." },
  { pergunta: "Como faço para remarcar minha consulta?", resposta: "Entre em contato com antecedência pelo WhatsApp ou telefone e nossa equipe irá reorganizar seu atendimento para outra data disponível." },
];
