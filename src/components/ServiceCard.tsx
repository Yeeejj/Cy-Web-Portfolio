import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ProjectType } from "@/types/project";
import { Award, Palette, Rocket } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  relatedProjects: ProjectType[];
}

const getServiceIcon = (title: string) => {
  switch (title) {
    case "Web Development":
      return <Rocket className="w-8 h-8 text-forest mb-4" />;
    case "Frontend Development":
      return <Palette className="w-8 h-8 text-wheat mb-4" />;
    case "Backend Integration":
      return <Award className="w-8 h-8 text-sage mb-4" />;
    default:
      return null;
  }
};

const ServiceCard = ({ title, description, relatedProjects }: ServiceCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="bg-pearl dark:bg-charcoal p-8 rounded-xl playful-shadow playful-border hover:-translate-y-2 transition-all duration-300 animate-float">
          {getServiceIcon(title)}
          <h3 className="text-2xl font-semibold mb-4 text-forest">{title}</h3>
          <p className="text-charcoal dark:text-sand">{description}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-pearl border-2 border-forest">
        <div className="space-y-4">
          <h4 className="font-semibold text-lg text-forest">Related Projects:</h4>
          {relatedProjects.map((project, index) => (
            <div key={index} className="text-sm bg-sand p-3 rounded-lg playful-border hover:bg-wheat transition-colors">
              <p className="font-medium text-forest">{project.title}</p>
              <p className="text-charcoal">{project.shortDescription}</p>
            </div>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ServiceCard;