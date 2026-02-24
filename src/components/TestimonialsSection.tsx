import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria S.",
    text: "O Dr. Leo mudou minha relação com a alimentação. Emagreci 12kg de forma saudável e me sinto com muito mais energia!",
    stars: 5,
  },
  {
    name: "Carlos R.",
    text: "Minha performance nos treinos melhorou muito depois que comecei o acompanhamento. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Ana P.",
    text: "Consulta detalhada, atenciosa e com explicações claras. Finalmente encontrei um profissional que se importa de verdade.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            O que dizem nossos <span className="text-gold">pacientes</span>
          </h2>
          <p className="text-muted-foreground font-sans mt-4 text-lg">+500 pacientes atendidos com excelência</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-all">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 font-sans leading-relaxed italic">"{item.text}"</p>
                <p className="text-sm font-semibold text-foreground font-sans">{item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
