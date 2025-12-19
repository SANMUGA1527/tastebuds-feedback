import { useState } from "react";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import ambiance1 from "@/assets/ambiance-1.jpg";

const galleryItems = [
  { src: food1, alt: "Filet mignon with sauce", title: "Signature Steak" },
  { src: food2, alt: "Chocolate soufflé with gold leaf", title: "Decadent Desserts" },
  { src: ambiance1, alt: "Wine cellar", title: "Wine Collection" },
  { src: food3, alt: "Fresh seafood platter", title: "Ocean's Finest" },
];

export const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-card/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Culinary Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the artistry of our kitchen and the elegance of our space
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                  hoveredIndex === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
