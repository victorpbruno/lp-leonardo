import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ConsultationModal from "@/components/ConsultationModal";
import { ConsultationModalProvider } from "@/hooks/use-consultation-modal";

const Index = () => {
  return (
    <ConsultationModalProvider>
      <main>
        <HeroSection />
        <PainPointsSection />
        <AboutSection />
        <TreatmentsSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
        <WhatsAppFloat />
        <ConsultationModal />
      </main>
    </ConsultationModalProvider>
  );
};

export default Index;
