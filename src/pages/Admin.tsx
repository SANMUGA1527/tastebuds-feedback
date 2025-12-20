import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { StarRating } from "@/components/StarRating";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Check, X, Shield, Clock, LogOut, AlertTriangle } from "lucide-react";
import { format } from "date-fns";

interface Feedback {
  id: string;
  name: string;
  rating: number;
  message: string;
  is_approved: boolean;
  created_at: string;
}

const Admin = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAdminAuth();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("pending");

  const fetchFeedbacks = async () => {
    let query = supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false });

    if (filter === "pending") {
      query = query.eq("is_approved", false);
    } else if (filter === "approved") {
      query = query.eq("is_approved", true);
    }

    const { data, error } = await query;

    if (error) {
      toast.error("Failed to fetch feedback");
      return;
    }

    setFeedbacks(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (isAdmin) {
      fetchFeedbacks();
    }
  }, [filter, isAdmin]);

  const handleApprove = async (id: string) => {
    const { error } = await supabase
      .from("feedback")
      .update({ is_approved: true })
      .eq("id", id);

    if (error) {
      toast.error("Failed to approve feedback");
      return;
    }

    toast.success("Feedback approved!");
    fetchFeedbacks();
  };

  const handleReject = async (id: string) => {
    const { error } = await supabase.from("feedback").delete().eq("id", id);

    if (error) {
      toast.error("Failed to delete feedback");
      return;
    }

    toast.success("Feedback deleted");
    fetchFeedbacks();
  };

  const pendingCount = feedbacks.filter((f) => !f.is_approved).length;

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="glass-card border-destructive/20 max-w-md w-full">
          <CardContent className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h2 className="font-serif text-xl font-semibold mb-2">Access Denied</h2>
            <p className="text-muted-foreground mb-6">
              You don't have admin privileges. Contact the administrator to request access.
            </p>
            <Button variant="secondary" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-4xl">
        <Card className="glass-card border-primary/20 mb-8">
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="font-serif text-2xl text-gradient-gold">
                  Admin Dashboard
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Signed in as {user.email}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </CardHeader>
        </Card>

        <div className="flex gap-2 mb-6">
          <Button
            variant={filter === "pending" ? "default" : "secondary"}
            onClick={() => setFilter("pending")}
            className={filter === "pending" ? "bg-gradient-gold" : ""}
          >
            <Clock className="w-4 h-4 mr-2" />
            Pending
            {pendingCount > 0 && (
              <Badge variant="secondary" className="ml-2 bg-background/20">
                {pendingCount}
              </Badge>
            )}
          </Button>
          <Button
            variant={filter === "approved" ? "default" : "secondary"}
            onClick={() => setFilter("approved")}
            className={filter === "approved" ? "bg-gradient-gold" : ""}
          >
            <Check className="w-4 h-4 mr-2" />
            Approved
          </Button>
          <Button
            variant={filter === "all" ? "default" : "secondary"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-gradient-gold" : ""}
          >
            All
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground animate-pulse">Loading...</p>
          </div>
        ) : feedbacks.length === 0 ? (
          <Card className="glass-card">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No feedback found</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {feedbacks.map((feedback) => (
              <Card
                key={feedback.id}
                className="glass-card hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-serif text-lg font-medium text-foreground">
                          {feedback.name}
                        </h3>
                        {feedback.is_approved ? (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            Approved
                          </Badge>
                        ) : (
                          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                            Pending
                          </Badge>
                        )}
                      </div>
                      <StarRating rating={feedback.rating} readonly size="sm" />
                      <p className="text-foreground/80 italic">"{feedback.message}"</p>
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(feedback.created_at), "PPpp")}
                      </p>
                    </div>

                    <div className="flex gap-2 shrink-0">
                      {!feedback.is_approved && (
                        <Button
                          size="sm"
                          onClick={() => handleApprove(feedback.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Check className="w-4 h-4 mr-1" />
                          Approve
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleReject(feedback.id)}
                      >
                        <X className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;