import { HeroSection } from "@/components/HeroSection";
import { GallerySection } from "@/components/GallerySection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FeedbackForm } from "@/components/FeedbackForm";
import { TestimonialsSection } from "@/components/TestimonialsSection";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <HeroSection />

      <GallerySection />

      <AboutSection />

      <ContactSection />
      
      <section className="py-16 relative">
        <div className="container">
          <div className="max-w-lg mx-auto">
            <FeedbackForm />
          </div>
        </div>
      </section>

      <div className="border-t border-border/50" />

      <TestimonialsSection />

      <footer className="py-8 border-t border-border/50">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Hotel Sri Senthoor & Cafe 77. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;