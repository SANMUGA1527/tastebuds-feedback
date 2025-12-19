import { useState } from "react";
import { StarRating } from "./StarRating";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Send } from "lucide-react";

export const FeedbackForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    if (!message.trim()) {
      toast.error("Please enter your feedback");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("feedback").insert({
      name: name.trim(),
      rating,
      message: message.trim(),
    });

    setIsSubmitting(false);

    if (error) {
      toast.error("Failed to submit feedback. Please try again.");
      return;
    }

    toast.success("Thank you! Your feedback has been submitted for review.");
    setName("");
    setRating(0);
    setMessage("");
    onSuccess?.();
  };

  return (
    <Card className="glass-card border-primary/20">
      <CardHeader className="text-center pb-2">
        <CardTitle className="font-serif text-2xl md:text-3xl text-gradient-gold">
          Share Your Experience
        </CardTitle>
        <p className="text-muted-foreground text-sm mt-2">
          We'd love to hear about your dining experience
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground/80">
              Your Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="bg-secondary/50 border-border/50 focus:border-primary"
              maxLength={50}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-foreground/80">Your Rating</Label>
            <div className="flex justify-center py-2">
              <StarRating rating={rating} onRatingChange={setRating} size="lg" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground/80">
              Your Feedback
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your experience..."
              className="bg-secondary/50 border-border/50 focus:border-primary min-h-[120px] resize-none"
              maxLength={500}
            />
            <p className="text-xs text-muted-foreground text-right">
              {message.length}/500
            </p>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold py-6 shadow-gold transition-all duration-300 hover:shadow-gold-lg"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Feedback
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
