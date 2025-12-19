import { Utensils } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float stagger-2" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-up">
            <Utensils className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Fine Dining Experience</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up stagger-1 opacity-0">
            <span className="text-foreground">La Maison</span>
            <br />
            <span className="text-gradient-gold">Gourmande</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground animate-fade-in-up stagger-2 opacity-0">
            Where culinary artistry meets exceptional hospitality. Share your 
            experience and help us continue our tradition of excellence.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in-up stagger-3 opacity-0">
            <div className="w-12 h-px bg-border" />
            <span>Est. 1985</span>
            <div className="w-12 h-px bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};
