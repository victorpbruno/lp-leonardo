import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Salad, Dumbbell, HeartPulse, CalendarCheck, ClipboardList, Sparkles, RefreshCw } from "lucide-react";

const treatments = [
  {
    icon: Stethoscope,
    title: "Nutrologia Clínica",
    description: "Investigação completa com exames, diagnóstico e suplementação personalizada.",
  },
  {
    icon: Salad,
    title: "Emagrecimento Saudável",
    description: "Sem dietas restritivas. Resultados duradouros com ciência e acompanhamento.",
  },
  {
    icon: Dumbbell,
    title: "Performance Esportiva",
    description: "Nutrição estratégica para atletas e praticantes de atividade física.",
  },
  {
    icon: HeartPulse,
    title: "Longevidade e Bem-estar",
    description: "Envelhecimento saudável com foco em qualidade de vida e prevenção.",
  },
];

const steps = [
  { icon: CalendarCheck, step: "01", title: "Agendamento", desc: "Agende pelo WhatsApp de forma rápida" },
  { icon: ClipboardList, step: "02", title: "Avaliação Completa", desc: "Consulta detalhada e solicitação de exames" },
  { icon: Sparkles, step: "03", title: "Plano Personalizado", desc: "Tratamento sob medida para você" },
  { icon: RefreshCw, step: "04", title: "Acompanhamento", desc: "Retornos e ajustes para resultado contínuo" },
];

const TreatmentsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Treatments */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3">Áreas de Atuação</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tratamentos especializados para <span className="text-gold">cada necessidade</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {treatments.map((item, index) => (
            <Card key={index} className="group border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg bg-card text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mx-auto group-hover:bg-gold/10 transition-colors">
                  <item.icon className="w-8 h-8 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Steps */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3">Como Funciona</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Seu caminho até a <span className="text-gold">transformação</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-gold/30 font-serif text-5xl font-bold">{item.step}</div>
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
