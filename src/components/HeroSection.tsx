import { Utensils } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Elegant restaurant interior with golden chandeliers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float stagger-2" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm animate-fade-in-up">
            <Utensils className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Fine Dining Experience</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up stagger-1 opacity-0">
            <span className="text-foreground drop-shadow-lg">La Maison</span>
            <br />
            <span className="text-gradient-gold">Gourmande</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-foreground/90 animate-fade-in-up stagger-2 opacity-0 drop-shadow-md">
            Where culinary artistry meets exceptional hospitality. Share your 
            experience and help us continue our tradition of excellence.
          </p>

          <div className="flex items-center gap-2 text-sm text-foreground/80 animate-fade-in-up stagger-3 opacity-0">
            <div className="w-12 h-px bg-primary/50" />
            <span className="drop-shadow-md">Est. 1985</span>
            <div className="w-12 h-px bg-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
};
