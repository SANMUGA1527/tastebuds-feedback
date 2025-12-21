import { Clock } from "lucide-react";
const hours = [{
  day: "All Days",
  time: "7:00 AM - 10:30 PM"
}];
export const AboutSection = () => {
  return <section className="py-20 bg-card/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              <span className="text-gradient-gold">About Us</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Since its establishment, Hotel Sri Senthoor & Cafe 77 has been a trusted destination for authentic pure vegetarian cuisine in Krishnagiri. Our skilled cooks prepare every dish with care, using fresh ingredients and traditional recipes that bring out rich, comforting flavors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you’re stopping by for a quick refreshment, enjoying a family meal, or taking a break during your journey, our clean ambience and friendly service ensure a pleasant and satisfying dining experience for every guest.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 space-y-6">
            <div className="items-center gap-3 mb-6 flex flex-row">
              <div className="p-3 rounded-full bg-primary/10">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Opening Hours</h3>
            </div>
            <div className="space-y-4">
              {hours.map((item, index) => <div key={index} className="justify-between items-center py-3 border-b border-border/30 last:border-0 flex flex-col">
                  <span className="text-foreground text-right font-sans mx-[12px] text-lg font-normal">{item.day}</span>
                  <span className="text-primary font-semibold">{item.time}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};