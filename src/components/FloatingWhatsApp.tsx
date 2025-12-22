import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const whatsappNumber = "917010695808";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hello! I'd like to make an enquiry.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all hover:scale-110 animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};
