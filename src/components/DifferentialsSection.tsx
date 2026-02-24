import { UserCheck, Clock, RefreshCw, FlaskConical, MapPin } from "lucide-react";

const differentials = [
  { icon: UserCheck, title: "Atendimento personalizado", desc: "Cada paciente recebe um plano único, pensado para sua realidade." },
  { icon: Clock, title: "Consulta detalhada", desc: "Sem pressa. Tempo para ouvir, entender e investigar." },
  { icon: RefreshCw, title: "Acompanhamento contínuo", desc: "Retornos regulares para ajustar e otimizar resultados." },
  { icon: FlaskConical, title: "Baseado em ciência", desc: "Condutas fundamentadas em evidências científicas atualizadas." },
  { icon: MapPin, title: "Localização acessível", desc: "Consultório em Araraquara/SP com fácil acesso e estacionamento." },
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(42_65%_55%_/_0.05),_transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3">Diferenciais</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Por que escolher o <span className="text-gold">Dr. Leo?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((item, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-gold/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-base font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/50 font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
