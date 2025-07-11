import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, Facebook, Instagram, MessageCircle, Users } from "lucide-react";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";

const jobTitles = [
  "Cybersecurity Analyst",
  "Machine Learning Engineer", 
  "Data Scientist",
  "Quantitative Analyst",
  "UX/UI Designer",
  "Financial Software Engineer",
  "Cloud Infrastructure Engineer",
  "Business Intelligence Analyst",
  "Data Engineer",
  "Product Manager"
];

const Index = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = jobTitles[currentTitleIndex];
    
    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
        setIsTyping(true);
      }
    }
  }, [currentTitleIndex, displayedText, isTyping]);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-200">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-16 flex items-center bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fade-up">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Cyrel Edaño
              <span className="text-primary block mt-2 min-h-[1.2em]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Passionate about creating elegant solutions to complex problems
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/lovable-uploads/417a9a4d-6329-407e-a13d-7548e35db9f2.png"
              alt="Cyrel Edaño"
              className="w-80 h-96 object-cover rounded-3xl shadow-2xl animate-bounce-slight"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen pt-16 flex items-center bg-white dark:bg-gray-800" id="about">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              I'm a junior software engineer with a passion for building web applications
              and solving complex problems. With a strong foundation in modern web
              technologies, I strive to create efficient and user-friendly solutions.
            </p>
            <p>
              My journey in software development started with a deep curiosity for
              technology and has evolved into a professional pursuit of creating
              impactful digital experiences.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />
      <ProjectsSection />

      {/* Contact Section */}
      <section className="min-h-screen pt-16 flex items-center bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800" id="contact">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleContact} className="space-y-6">
              <Input
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({ ...contactForm, name: e.target.value })
                }
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
              />
              <Textarea
                placeholder="Your Message"
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="py-12 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
            {[
              { icon: <Github size={24} />, href: "https://github.com/Yeeejj" },
              { icon: <Facebook size={24} />, href: "https://www.facebook.com/cyjaneed/" },
              { icon: <Instagram size={24} />, href: "https://www.instagram.com/costlycereal_/" },
              { icon: <MessageCircle size={24} />, href: "https://t.me/cyreledano" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/cyreljane/" },
              { icon: <Mail size={24} />, href: "mailto:edano.cyreljane@gmail.com" },
              { icon: <Users size={24} />, href: "https://discordapp.com/users/didang022" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
