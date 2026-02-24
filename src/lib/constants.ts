const WHATSAPP_NUMBER = "5516999999999"; // Substituir pelo número real
const WHATSAPP_MESSAGE = encodeURIComponent("Olá Dr. Leo! Gostaria de agendar uma consulta.");

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
