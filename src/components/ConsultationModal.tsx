import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Award, BadgeCheck, Microscope, Stethoscope, HeartPulse, MessageCircle } from "lucide-react";
import { useConsultationModal } from "@/hooks/use-consultation-modal";

type PainOption = {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  highlight: string;
};

const painOptions: PainOption[] = [
  {
    id: "emagrecimento",
    label: "Emagrecimento saudável",
    title: "Seu emagrecimento merece um plano personalizado",
    paragraphs: [
      "Dietas restritivas que falham, peso que sempre volta, frustração com a balança... O emagrecimento saudável é mais do que perder peso — é equilibrar metabolismo, hormônios e hábitos.",
      "Com avaliação nutrológica completa, é possível identificar a causa real do ganho de peso e construir um protocolo individualizado, tratando inflamações, regulando o apetite e protegendo sua massa muscular.",
    ],
    highlight: "Emagrecer com saúde é cuidar do seu corpo por dentro também.",
  },
  {
    id: "performance",
    label: "Performance esportiva",
    title: "Seu treino merece resultado de verdade",
    paragraphs: [
      "Treinos que não rendem, recuperação lenta, platôs frustrantes... A nutrologia esportiva potencializa seus resultados com estratégias baseadas em ciência.",
      "Com avaliação completa, é possível otimizar sua composição corporal, melhorar a recuperação muscular e elevar sua performance — seja você atleta ou praticante recreativo.",
    ],
    highlight: "Performance é nutrição, recuperação e estratégia caminhando juntas.",
  },
  {
    id: "energia",
    label: "Cansaço e falta de energia",
    title: "Sua disposição merece um cuidado especializado",
    paragraphs: [
      "Acordar cansado, perder o foco no meio do dia, sentir o corpo pesado... Cansaço crônico raramente é só estresse — pode ser deficiência nutricional, alteração hormonal ou metabólica.",
      "Com investigação nutrológica completa, é possível identificar a causa real do cansaço e construir um plano para recuperar sua energia e disposição.",
    ],
    highlight: "Energia é resultado de equilíbrio — e equilíbrio se constrói.",
  },
  {
    id: "compulsao",
    label: "Compulsão alimentar e ansiedade",
    title: "Sua relação com a comida merece um cuidado humanizado",
    paragraphs: [
      "Ataques à geladeira, fome emocional, culpa depois de comer... A compulsão alimentar tem origens biológicas e emocionais — e tem tratamento.",
      "Com uma abordagem nutrológica integrativa, é possível regular os hormônios da fome, estabilizar o humor pela alimentação e construir uma relação saudável com a comida.",
    ],
    highlight: "Cuidar da alimentação é cuidar também da sua mente.",
  },
  {
    id: "hormonios",
    label: "Hormônios e reposição hormonal",
    title: "Seus hormônios merecem atenção especializada",
    paragraphs: [
      "Queda de libido, ganho de peso sem explicação, alterações de humor, sono ruim... Desequilíbrios hormonais afetam todos os aspectos da sua saúde.",
      "Com avaliação nutrológica completa, é possível investigar a fundo seu perfil hormonal e propor um tratamento individualizado para restaurar seu equilíbrio com segurança.",
    ],
    highlight: "Hormônios em equilíbrio mudam tudo — do humor à performance.",
  },
  {
    id: "longevidade",
    label: "Longevidade e qualidade de vida",
    title: "Sua longevidade merece um cuidado preventivo",
    paragraphs: [
      "Viver mais é bom — mas viver mais e bem é o que importa. A medicina do estilo de vida e a nutrologia preventiva são pilares de uma longevidade saudável.",
      "Com avaliação completa, é possível identificar riscos futuros, otimizar marcadores de saúde e construir um protocolo para envelhecer com energia, lucidez e autonomia.",
    ],
    highlight: "Envelhecer com saúde é uma escolha que se faz hoje.",
  },
  {
    id: "outro",
    label: "Outro",
    title: "Sua saúde merece uma avaliação completa",
    paragraphs: [
      "Cada paciente é único e cada queixa merece uma investigação personalizada. Independentemente do motivo, sua saúde merece atenção dedicada.",
      "Na consulta com o Dr. Leo Anhesini, você recebe uma avaliação nutrológica completa, com tempo e atenção exclusivos para o seu caso específico.",
    ],
    highlight: "Atendimento humanizado e personalizado para a sua história.",
  },
];

const credentials = [
  { icon: Stethoscope, text: "Médico Nutrólogo — CRM 111027" },
  { icon: BadgeCheck, text: "Formação de excelência em nutrologia" },
  { icon: HeartPulse, text: "Foco em emagrecimento, performance e longevidade" },
  { icon: Microscope, text: "Tratamento baseado em evidências científicas" },
  { icon: Award, text: "Atendimento 100% particular e personalizado" },
];

const TOTAL_STEPS = 5;

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const ConsultationModal = () => {
  const { open, setOpen, closeModal } = useConsultationModal();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [painId, setPainId] = useState<string>("");

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep(1);
        setName("");
        setPhone("");
        setPainId("");
      }, 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  const progress = (step / TOTAL_STEPS) * 100;
  const selectedPain = useMemo(() => painOptions.find((p) => p.id === painId), [painId]);

  const canProceed = useMemo(() => {
    if (step === 1) return name.trim().length >= 2 && phone.replace(/\D/g, "").length >= 10;
    if (step === 3) return painId !== "";
    return true;
  }, [step, name, phone, painId]);

  const goNext = () => {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
    else handleSubmit();
  };

  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = () => {
    const painLabel = selectedPain?.label ?? "Consulta nutrológica";
    const message = encodeURIComponent(
      `Olá, Dr. Leo! Meu nome é ${name.trim()}. Gostaria de agendar uma consulta sobre: ${painLabel}.`,
    );
    const phoneOnly = "5516991242351";
    window.open(`https://wa.me/${phoneOnly}?text=${message}`, "_blank", "noopener,noreferrer");
    closeModal();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg p-0 gap-0 border-gold/20 bg-background overflow-hidden">
        {/* Progress */}
        <div className="px-6 pt-6 pb-2">
          <div className="flex items-center justify-between text-xs font-sans text-muted-foreground mb-2">
            <span>Etapa {step} de {TOTAL_STEPS}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="px-6 pb-6 pt-4">
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Vamos começar? <span aria-hidden>💛</span>
              </h2>
              <div className="space-y-2">
                <Label htmlFor="cm-name" className="font-sans text-sm text-foreground">
                  Qual é o seu nome?
                </Label>
                <Input
                  id="cm-name"
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-gold/30 focus-visible:ring-gold/40"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cm-phone" className="font-sans text-sm text-foreground">
                  Qual o seu melhor WhatsApp?
                </Label>
                <Input
                  id="cm-phone"
                  inputMode="tel"
                  placeholder="(00) 0 0000-0000"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  className="border-gold/30 focus-visible:ring-gold/40"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Você merece o melhor cuidado</h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                O <strong className="text-foreground">Dr. Leo Anhesini</strong> é médico nutrólogo (CRM 111027),
                dedicado a transformar a saúde dos pacientes com uma abordagem personalizada, integrativa e
                baseada nas mais recentes evidências científicas.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Atendimento 100% particular e personalizado, cada consulta é reservada com tempo exclusivo
                para você, sem pressa e com um plano construído especificamente para a sua saúde e o seu momento.
              </p>
              <ul className="space-y-2 pt-2">
                {credentials.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 rounded-md border border-gold/20 bg-gold/5 px-3 py-2.5"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gold/15 text-gold">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span className="font-sans text-sm text-foreground">{c.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Motivo da consulta</h2>
              <p className="font-sans text-sm text-muted-foreground">
                Qual o principal motivo da sua consulta?
              </p>
              <RadioGroup value={painId} onValueChange={setPainId} className="space-y-2">
                {painOptions.map((opt) => (
                  <Label
                    key={opt.id}
                    htmlFor={`pain-${opt.id}`}
                    className={`flex items-center gap-3 rounded-md border px-3 py-2.5 cursor-pointer transition-colors ${
                      painId === opt.id
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/40 hover:bg-gold/5"
                    }`}
                  >
                    <RadioGroupItem id={`pain-${opt.id}`} value={opt.id} className="border-gold/50 text-gold" />
                    <span className="font-sans text-sm text-foreground">{opt.label}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 4 && selectedPain && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground leading-tight">
                {selectedPain.title}
              </h2>
              {selectedPain.paragraphs.map((p, i) => (
                <p key={i} className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="border-t border-gold/20 pt-4">
                <p className="font-sans italic text-sm text-foreground/80">{selectedPain.highlight}</p>
              </div>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Continue para dar o primeiro passo rumo a uma saúde mais equilibrada e duradoura.
              </p>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Um passo para cuidar de você</h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Com base no que você nos contou, o <strong className="text-foreground">Dr. Leo Anhesini</strong> tem
                experiência justamente nessa área e pode te oferecer um atendimento completamente personalizado.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                As consultas são realizadas de forma particular, com toda a atenção que você merece. O valor
                da consulta é de <strong className="text-foreground">R$ 700</strong>.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Você está pronto(a) para investir na sua saúde?
              </p>
            </div>
          )}

          {/* Footer actions */}
          <div className={`flex gap-3 pt-6 ${step === 1 ? "" : "sm:gap-3"}`}>
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={goBack}
                className="flex-1 rounded-full border-gold/30 hover:bg-gold/5 hover:text-foreground"
              >
                Voltar
              </Button>
            )}
            <Button
              type="button"
              onClick={goNext}
              disabled={!canProceed}
              className="flex-1 rounded-full bg-gold hover:bg-gold-dark text-navy-dark font-semibold shadow-md shadow-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === TOTAL_STEPS ? (
                <>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar com o Dr. Leo
                </>
              ) : step === 4 ? (
                "Ir para última etapa"
              ) : (
                "Agendar Consulta"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
