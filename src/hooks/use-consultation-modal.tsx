import { createContext, useCallback, useContext, useState, ReactNode } from "react";

type ConsultationModalContextValue = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
  setOpen: (open: boolean) => void;
};

const ConsultationModalContext = createContext<ConsultationModalContextValue | undefined>(undefined);

export const ConsultationModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <ConsultationModalContext.Provider value={{ open, openModal, closeModal, setOpen }}>
      {children}
    </ConsultationModalContext.Provider>
  );
};

export const useConsultationModal = () => {
  const ctx = useContext(ConsultationModalContext);
  if (!ctx) throw new Error("useConsultationModal must be used within ConsultationModalProvider");
  return ctx;
};
