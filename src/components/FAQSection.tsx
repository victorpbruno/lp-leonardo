import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a diferença entre nutrólogo e nutricionista?",
    answer: "O nutrólogo é um médico especializado no diagnóstico e tratamento de doenças relacionadas à alimentação e nutrição. Pode solicitar exames, diagnosticar doenças e prescrever medicamentos, além de orientação nutricional.",
  },
  {
    question: "A consulta é demorada?",
    answer: "A primeira consulta dura em média 40-60 minutos, pois é feita uma avaliação completa do histórico de saúde, hábitos alimentares, exame físico e solicitação de exames laboratoriais.",
  },
  {
    question: "Preciso fazer exames antes da primeira consulta?",
    answer: "Não é obrigatório, mas se tiver exames recentes (até 3 meses), traga-os. Na consulta, o Dr. Leo irá solicitar os exames necessários para uma avaliação completa.",
  },
  {
    question: "O tratamento é só com remédios?",
    answer: "Não. O tratamento é personalizado e pode incluir orientação alimentar, suplementação, mudanças de hábitos e, quando necessário, medicação. O foco é sempre na saúde integral.",
  },
  {
    question: "Aceita convênio?",
    answer: "Entre em contato pelo WhatsApp para verificar o que tem cobertura pelo convênio e as condições dos planos de acompanhamento particular.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Perguntas <span className="text-gold">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:border-gold/30 transition-colors"
            >
              <AccordionTrigger className="font-sans text-base font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
