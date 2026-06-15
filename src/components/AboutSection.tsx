import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Heart, Microscope, ShieldCheck } from "lucide-react";
import drLeoAbout from "@/assets/dr-leo-about.png";
import { useConsultationModal } from "@/hooks/use-consultation-modal";

const highlights = [
  { icon: Award, label: "Formação de excelência" },
  { icon: Heart, label: "Atendimento humanizado" },
  { icon: Microscope, label: "Baseado em evidências" },
  { icon: ShieldCheck, label: "Segurança e Resultado" },
];

const AboutSection = () => {
  const { openModal } = useConsultationModal();
  return (
    <section className="py-20 lg:py-28 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(42_65%_55%_/_0.06),_transparent_60%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="w-[350px] h-[420px] rounded-2xl overflow-hidden border border-gold/15 shadow-xl">
              <img src={drLeoAbout} alt="Dr. Leo Anhesini no consultório" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase">Sobre o Doutor</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Dr. Leo Anhesini
            </h2>
            <p className="text-white/50 font-sans text-sm">CRMSP 111027 · RQE 87517 · 148616</p>

            <p className="text-white/70 font-sans text-lg leading-relaxed">
              Médico nutrólogo dedicado a transformar a saúde dos pacientes através de uma abordagem personalizada, 
              integrativa e baseada nas mais recentes evidências científicas. Cada paciente é único — e o tratamento 
              também deve ser.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                  <item.icon className="w-4 h-4 text-gold" />
                  <span className="text-white/80 text-sm font-sans">{item.label}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={openModal}
              className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold font-sans rounded-full px-8 py-6 shadow-lg shadow-gold/20"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agende com o Dr. Leo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
