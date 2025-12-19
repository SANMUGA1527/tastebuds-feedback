import { Clock } from "lucide-react";

const hours = [
  { day: "Monday - Thursday", time: "5:00 PM - 10:00 PM" },
  { day: "Friday - Saturday", time: "5:00 PM - 11:00 PM" },
  { day: "Sunday", time: "4:00 PM - 9:00 PM" },
];

export const AboutSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              <span className="text-gradient-gold">About Us</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Since 1985, La Maison Gourmande has been a beacon of culinary excellence. 
              Our award-winning chefs craft each dish with passion, using only the finest 
              locally-sourced ingredients and time-honored French techniques.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're celebrating a special occasion or simply savoring an 
              extraordinary meal, our elegant dining room and impeccable service create 
              an unforgettable experience for every guest.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Opening Hours</h3>
            </div>
            <div className="space-y-4">
              {hours.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-border/30 last:border-0"
                >
                  <span className="text-foreground font-medium">{item.day}</span>
                  <span className="text-primary">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
