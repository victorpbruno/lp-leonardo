import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";
import drLeoHero from "@/assets/dr-leo-hero.png";
import { useConsultationModal } from "@/hooks/use-consultation-modal";

const HeroSection = () => {
  const { openModal } = useConsultationModal();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-dark">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(42_65%_55%_/_0.08),_transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            <Badge className="bg-gold/15 text-gold border-gold/30 px-4 py-1.5 text-sm font-sans">
              <MapPin className="w-3.5 h-3.5 mr-1.5" />
              Nutrólogo | Araraquara - SP
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Transforme sua saúde{" "}
              <span className="text-gold">de dentro para fora</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 font-sans max-w-xl mx-auto lg:mx-0">
              Emagrecimento saudável, performance esportiva e longevidade com acompanhamento médico e nutricional personalizado e baseado em ciência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={openModal}
                className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold font-sans text-base px-8 py-6 rounded-full shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agende sua Consulta
              </Button>
            </div>

            <p className="text-white/40 text-sm font-sans">
              Vagas limitadas para esta semana
            </p>
          </div>

          {/* Right - Doctor placeholder */}
            <div className="flex justify-center">
            <div className="relative w-[280px] h-[350px] lg:w-[400px] lg:h-[500px] rounded-2xl overflow-hidden border-2 border-gold/20 shadow-2xl shadow-gold/10">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent z-10" />
              <img src={drLeoHero} alt="Dr. Leo Anhesini — Médico Nutrólogo em Araraquara" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-gold font-serif text-xl font-semibold">Dr. Leo Anhesini</p>
                <p className="text-white/60 text-sm font-sans">Médico Nutrólogo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
