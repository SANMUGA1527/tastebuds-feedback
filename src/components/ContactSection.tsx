import { MapPin, Phone, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Visit Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to welcome you to our restaurant
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">
              123 Gourmet Avenue<br />
              Downtown District<br />
              New York, NY 10001
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">Reservations</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Call us to book a table
            </p>
            <a href="tel:+12125551234" className="text-primary hover:underline">
              +1 (212) 555-1234
            </a>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-2">
              For inquiries & events
            </p>
            <a href="mailto:info@lamaisongourmande.com" className="text-primary hover:underline text-sm">
              info@lamaisongourmande.com
            </a>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-border/50 h-64 bg-card/50 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-primary/50" />
            <p className="text-sm">Interactive map coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};
