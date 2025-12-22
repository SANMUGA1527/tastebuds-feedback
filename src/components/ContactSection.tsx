import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Instagram } from "lucide-react";

export const ContactSection = () => {
  const whatsappNumber = "917010695808";
  const instagramHandle = "hotelsrisenthoor";
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

        {/* Social Contact Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello! I'd like to make an enquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href={`https://instagram.com/${instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            Follow Us
          </a>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-border/50 h-80">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d78.3964496!3d12.3972076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac4f002960ced7%3A0xb9ff394d89af9992!2sHotel%20Sri%20Senthoor%20and%20Cafe%2077!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin" width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Restaurant Location" className="grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>
    </section>;
};