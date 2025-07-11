import { projects } from "@/data/projects";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "AI & Data Science Services",
    description: "Advanced machine learning models and data-driven solutions for complex business problems",
  },
  {
    title: "Cybersecurity & Compliance Services",
    description: "Comprehensive security solutions and compliance frameworks to protect digital assets",
  },
  {
    title: "Cloud, DevOps & Infrastructure Automation",
    description: "Scalable cloud architecture and automated deployment pipelines for modern applications",
  },
  {
    title: "FinTech Product Engineering",
    description: "Financial technology solutions including trading platforms and payment systems",
  },
  {
    title: "Business Intelligence & Automation",
    description: "Data analytics, visualization, and workflow automation to optimize business processes",
  },
  {
    title: "Web3 & Blockchain Services",
    description: "Decentralized applications and blockchain solutions for next-generation platforms",
  },
  {
    title: "Conversational AI & Virtual Assistants",
    description: "Intelligent chatbots and AI assistants to enhance customer experiences",
  },
  {
    title: "UX & Digital Product Design",
    description: "User-centered design and innovative digital experiences that drive engagement",
  },
  {
    title: "Low-Code & Workflow Automation Services",
    description: "Rapid development solutions and automated workflows to accelerate time-to-market",
  },
];

const ServicesSection = () => {
  return (
    <section className="min-h-screen pt-16 flex items-center bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" id="services">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Delivering exceptional digital solutions tailored to your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              relatedProjects={projects.filter(p => p.serviceType === service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;