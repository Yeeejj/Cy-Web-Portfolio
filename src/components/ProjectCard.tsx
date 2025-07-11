import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ProjectType } from "@/types/project";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="group bg-pearl dark:bg-charcoal rounded-xl overflow-hidden playful-shadow playful-border animate-float">
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6 bg-sand/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2 text-forest group-hover:text-wheat transition-colors">{project.title}</h3>
            <p className="text-charcoal mb-4">{project.shortDescription}</p>
            <Button 
              variant="outline" 
              className="bg-background/80 backdrop-blur-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2 playful-shadow"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              View Project <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-96 bg-pearl border-2 border-forest">
        <div className="space-y-4">
          <h4 className="font-semibold text-lg text-forest">Project Details:</h4>
          <div className="space-y-3">
            <div className="bg-sand p-3 rounded-lg playful-border">
              <p className="font-medium text-forest">Technologies:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 text-sm bg-wheat text-charcoal rounded-full animate-bounce-slight">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-sand p-3 rounded-lg playful-border">
              <p className="font-medium text-forest mb-2">Key Features:</p>
              <ul className="list-disc pl-4 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-sm text-charcoal">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProjectCard;