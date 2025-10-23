import { Card, CardContent } from "@/components/ui/card";
import { Brain, Wand2, Target, CheckCircle } from "lucide-react";

const AIFeatures = () => {
  const features = [
    {
      icon: Wand2,
      title: "Auto-Fill Content",
      description: "AI suggests relevant content based on your job title and experience, saving you hours of writing.",
    },
    {
      icon: Brain,
      title: "Grammar & Tone",
      description: "Automatically improve phrasing, fix grammar, and ensure professional tone throughout your resume.",
    },
    {
      icon: Target,
      title: "Job Optimization",
      description: "Tailor your resume to specific job descriptions with AI-powered keyword matching and suggestions.",
    },
    {
      icon: CheckCircle,
      title: "ATS Keyword Matcher",
      description: "Ensure your resume passes Applicant Tracking Systems with optimized keywords and formatting.",
    },
  ];

  return (
    <section id="ai-features" className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powered by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Advanced AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI doesn't just fill in blanks—it understands context, optimizes for job markets, and ensures your resume stands out
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Real-Time AI Assistance</h3>
              <p className="text-muted-foreground mb-6">
                As you type, our AI analyzes your content in real-time, suggesting improvements and ensuring 
                every word counts. Get instant feedback on tone, grammar, and ATS optimization.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <Brain className="w-5 h-5" />
                AI analyzes 150+ data points per resume
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
