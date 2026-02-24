import { WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(42_65%_55%_/_0.08),_transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Dê o primeiro passo para sua{" "}
            <span className="text-gold">transformação</span>
          </h2>

          <p className="text-white/60 font-sans text-lg">
            Agende sua consulta e descubra como a nutrologia pode mudar sua vida.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-navy-dark font-bold font-sans text-lg px-10 py-7 rounded-full shadow-xl shadow-gold/25 transition-all hover:shadow-2xl hover:shadow-gold/30 hover:scale-105"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6 mr-2" />
              Agendar pelo WhatsApp
            </a>
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-sm font-sans pt-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Araraquara - SP</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Seg-Sex: 8h às 18h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
