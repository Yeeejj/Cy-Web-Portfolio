import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="min-h-screen pt-16 flex items-center bg-sand" id="projects">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 text-forest font-cormorant">
            Streamlined digital experiences.
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto font-mate text-lg">
            I've worked on a variety of projects, from small websites to large-scale web applications. Here are some of my favorites:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-8 text-charcoal/50 font-mate">
          {projects.length} projects
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;