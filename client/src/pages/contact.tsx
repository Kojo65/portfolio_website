import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactMessageSchema, type ContactMessage, type ContactResponse } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Loader2 } from "lucide-react";

// Contact page component with form and information
export default function Contact() {
  const { toast } = useToast();
  
  // Setup form with validation
  const form = useForm<ContactMessage>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  const contactMutation = useMutation({
    mutationFn: async (data: ContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return await response.json() as ContactResponse;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast({
          title: "Message sent successfully!",
          description: data.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error sending message",
          description: data.message,
          variant: "destructive",
        });
      }
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  // Form submit handler
  const onSubmit = (data: ContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="pt-20">
      <section className="py-16 xs:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 xs:mb-16">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 xs:mb-4" data-testid="contact-title">Get In Touch</h2>
            <p className="text-muted-foreground text-base xs:text-lg max-w-2xl mx-auto px-2" data-testid="contact-subtitle">
              Have a project in mind or just want to connect? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 xs:space-y-8">
              <div>
                <h3 className="text-xl xs:text-2xl font-semibold mb-4 xs:mb-6" data-testid="contact-info-title">Let's Connect</h3>
                <p className="text-muted-foreground mb-4 xs:mb-6 text-sm xs:text-base" data-testid="contact-info-description">
                  I'm always interested in new opportunities and collaborations. 
                  Whether you have a project idea, need technical consultation, 
                  or just want to discuss technology, feel free to reach out.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3" data-testid="contact-email">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm xs:text-base">magboisaac390@gmail.com</p>
                    <p className="text-xs xs:text-sm text-muted-foreground">Drop me an email</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3" data-testid="contact-location">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm xs:text-base">Available Globally</p>
                    <p className="text-xs xs:text-sm text-muted-foreground">Remote & on-site work</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3" data-testid="contact-response">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm xs:text-base">Response Time</p>
                    <p className="text-xs xs:text-sm text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-xl p-4 xs:p-6 sm:p-8 border border-border">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 xs:space-y-6" data-testid="contact-form">
                <div>
                  <Label htmlFor="name" className="block text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    {...form.register("name")}
                    className="w-full text-sm"
                    data-testid="input-name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-xs xs:text-sm mt-1" data-testid="error-name">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...form.register("email")}
                    className="w-full text-sm"
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-xs xs:text-sm mt-1" data-testid="error-email">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project or just say hello..."
                    {...form.register("message")}
                    className="w-full resize-none text-sm"
                    data-testid="input-message"
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-xs xs:text-sm mt-1" data-testid="error-message">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  className="w-full text-sm xs:text-base"
                  disabled={contactMutation.isPending}
                  data-testid="submit-button"
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}