import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResumeBuilder = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
    template: "modern",
  });

  const handleDownload = () => {
    toast({
      title: "Resume Downloaded!",
      description: "Your resume has been downloaded as PDF.",
    });
  };

  const handleSave = () => {
    toast({
      title: "Resume Saved!",
      description: "Your resume has been saved to your account.",
    });
  };

  return (
    <section id="builder" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Build Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill in your details and watch AI create your perfect resume in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Form Section */}
          <Card>
            <CardHeader>
              <CardTitle>Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="template">Resume Template</Label>
                <Select value={formData.template} onValueChange={(value) => setFormData({ ...formData, template: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="classic">Classic</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea 
                  id="summary"
                  placeholder="Experienced professional with..."
                  rows={4}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Work Experience</Label>
                <Textarea 
                  id="experience"
                  placeholder="Software Engineer at Tech Corp (2020-2024)..."
                  rows={4}
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Textarea 
                  id="education"
                  placeholder="Bachelor's in Computer Science..."
                  rows={3}
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Textarea 
                  id="skills"
                  placeholder="React, TypeScript, Node.js..."
                  rows={3}
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <div className="space-y-4">
            <Card className="bg-gradient-to-br from-background to-secondary/20">
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-background rounded-lg p-6 shadow-lg min-h-[600px]">
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h3 className="text-2xl font-bold">{formData.fullName || "Your Name"}</h3>
                      <p className="text-sm text-muted-foreground">{formData.email || "your@email.com"} • {formData.phone || "Your Phone"}</p>
                    </div>
                    
                    {formData.summary && (
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Professional Summary</h4>
                        <p className="text-sm text-muted-foreground">{formData.summary}</p>
                      </div>
                    )}
                    
                    {formData.experience && (
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Experience</h4>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">{formData.experience}</p>
                      </div>
                    )}
                    
                    {formData.education && (
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Education</h4>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">{formData.education}</p>
                      </div>
                    )}
                    
                    {formData.skills && (
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Skills</h4>
                        <p className="text-sm text-muted-foreground">{formData.skills}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="gradient" size="lg" className="flex-1" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="lg" className="flex-1" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilder;
