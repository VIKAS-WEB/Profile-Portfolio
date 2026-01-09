import { useState, useRef } from "react";
import { Phone, Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

console.log("KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


// EmailJS Configuration - Get these from your EmailJS dashboard
// 1. Go to https://www.emailjs.com/ and sign up
// 2. Create an Email Service (connect your Gmail)
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Get your Public Key from Account > API Keys
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "7017174051",
    href: "tel:+917017174051",
  },
  {
    icon: Mail,
    label: "Email",
    value: "vikasind786@gmail.com",
    href: "mailto:vikasind786@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View GitHub",
    href: "https://github.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, Uttar Pradesh",
    href: "#",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      // send notification to admin (uses hidden to_email in the form)
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      // send confirmation email to the submitter (if their email exists)
      const userEmail = formData.email;
      const userName = formData.name;
      const userMessage = formData.message;

      if (userEmail) {
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
              from_name: userName,
              from_email: userEmail,
              message: userMessage,
              to_email: userEmail,
            },
            EMAILJS_PUBLIC_KEY
          );
        } catch (err) {
          // Non-fatal: log and continue. Admin already received email.
          console.error("EmailJS confirmation error:", err);
        }
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. A confirmation email has been sent to you.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto px-2">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-base sm:text-xl font-semibold mb-4 sm:mb-6">Get in Touch</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-background hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-xs sm:text-base font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl">
            <h3 className="text-base sm:text-xl font-semibold mb-4 sm:mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input type="hidden" name="to_email" value="vikasind786@gmail.com" />
              <div>
                <Input
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl h-10 sm:h-12 bg-background text-sm"
                />
              </div>
              <div>
                <Input
                  name="from_email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl h-10 sm:h-12 bg-background text-sm"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="rounded-xl bg-background resize-none text-sm"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
