import { Battery, Scale, Dumbbell, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
  {
    icon: Battery,
    title: "Cansaço constante",
    description: "Falta de energia mesmo dormindo bem, dificuldade em manter o foco e a disposição ao longo do dia.",
  },
  {
    icon: Scale,
    title: "Dificuldade para emagrecer",
    description: "Já tentou dietas, mas não consegue resultado duradouro. O peso volta sempre.",
  },
  {
    icon: Dumbbell,
    title: "Queda de performance",
    description: "Seus treinos não rendem como antes. Recuperação lenta e resultados estagnados.",
  },
  {
    icon: Brain,
    title: "Ansiedade e compulsão alimentar",
    description: "Relação difícil com a comida, episódios de compulsão e culpa constante.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Você já tentou de tudo e{" "}
            <span className="text-gold">nada funciona?</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg">
            Se você se identifica com alguma dessas situações, a nutrologia pode ser o caminho que faltava.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, index) => (
            <Card
              key={index}
              className="group border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 bg-card"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mx-auto group-hover:bg-gold/10 transition-colors">
                  <item.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
