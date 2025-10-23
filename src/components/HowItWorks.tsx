import { Card, CardContent } from "@/components/ui/card";
import { FileText, Sparkles, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Enter Your Details",
      description: "Fill in your personal information, work experience, education, and skills through our intuitive form.",
    },
    {
      icon: Sparkles,
      title: "AI Generates Resume",
      description: "Our AI analyzes your input, suggests improvements, and creates a professional, ATS-optimized resume.",
    },
    {
      icon: Download,
      title: "Download & Edit",
      description: "Preview your resume, make final adjustments, and download as PDF. Ready to apply!",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How It <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to create your perfect resume
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="mb-2 text-sm font-semibold text-muted-foreground">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
