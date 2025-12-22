import { Instagram } from "lucide-react";

export const FloatingInstagram = () => {
  const instagramHandle = "hotelsrisenthoor";

  return (
    <a
      href={`https://instagram.com/${instagramHandle}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Follow us on Instagram"
    >
      <Instagram className="w-7 h-7 text-white" />
    </a>
  );
};
