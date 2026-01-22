import { StarRating } from "./StarRating";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
interface FeedbackCardProps {
  name: string;
  rating: number;
  message: string;
  className?: string;
}
export const FeedbackCard = ({
  name,
  rating,
  message,
  className
}: FeedbackCardProps) => {
  
  return <Card className={`glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300 ${className}`}>
      <CardContent className="p-6 relative">
        <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
        <div className="space-y-3">
          <p className="font-serif font-extrabold text-2xl text-primary text-left">{name}</p>
          <div className="flex items-center gap-2">
            <StarRating rating={rating} readonly size="sm" />
            <span className="text-primary font-semibold text-sm">{rating.toFixed(1)}</span>
          </div>
          <p className="text-foreground/90 leading-relaxed italic pt-2">
            "{message}"
          </p>
        </div>
      </CardContent>
    </Card>;
};