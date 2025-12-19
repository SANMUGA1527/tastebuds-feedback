import { useEffect, useState } from "react";
import { FeedbackCard } from "./FeedbackCard";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquare } from "lucide-react";

interface Feedback {
  id: string;
  name: string;
  rating: number;
  message: string;
  created_at: string;
}

export const TestimonialsSection = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = async () => {
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .eq("is_approved", true)
      .order("created_at", { ascending: false })
      .limit(6);

    if (!error && data) {
      setFeedbacks(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFeedbacks();

    // Subscribe to realtime updates
    const channel = supabase
      .channel("feedback-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "feedback" },
        () => {
          fetchFeedbacks();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="container">
          <div className="flex justify-center">
            <div className="animate-pulse text-muted-foreground">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  if (feedbacks.length === 0) {
    return (
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4">
            <MessageSquare className="w-12 h-12 text-muted-foreground/50 mx-auto" />
            <p className="text-muted-foreground">
              No testimonials yet. Be the first to share your experience!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real experiences from our valued patrons
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((feedback, index) => (
            <FeedbackCard
              key={feedback.id}
              name={feedback.name}
              rating={feedback.rating}
              message={feedback.message}
              className={`animate-fade-in-up opacity-0 stagger-${(index % 5) + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
