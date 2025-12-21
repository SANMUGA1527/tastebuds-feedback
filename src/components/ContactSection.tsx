import { MapPin, Phone, Mail } from "lucide-react";
export const ContactSection = () => {
  return <section className="py-20">
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
              Hotel Sri Senthoor & Cafe 77,
Near Toll Plaza,
Nagampatti,<br />
              Krishnagiri District,<br />
              Tamil Nadu – 635203

            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">Reservations</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Call us for any Enquiry       
            </p>
            <a href="tel:+12125551234" className="text-primary hover:underline">
              +91 7010695808  
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
            <a className="text-primary hover:underline text-sm" href="mailto:hotelsrisenthoor77@gmail.com">
              hotelsrisenthoor77@gmail.com
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-border/50 h-80">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.0088901548787!2d78.18413067481671!3d12.482844187781967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac5fbfb33be0bb%3A0x506c4e0b8e4c3c1e!2sHotel%20Sri%20Senthoor%20%26%20Cafe%2077!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin" width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Restaurant Location" className="grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>
    </section>;
};