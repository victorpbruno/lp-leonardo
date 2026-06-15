import { MessageCircle } from "lucide-react";
import { useConsultationModal } from "@/hooks/use-consultation-modal";

const WhatsAppFloat = () => {
  const { openModal } = useConsultationModal();
  return (
    <button
      type="button"
      onClick={openModal}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/25 hover:scale-110 transition-transform"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </button>
  );
};

export default WhatsAppFloat;
