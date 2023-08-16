import ProjectCard, { ProjectCardProps } from "./ProjectCard";

import "@styles/ProjectCard.css";

interface ProjectBoardProps {
  projects: Omit<ProjectCardProps, "id">[];
}

export default function ProjectsBoard({ projects }: ProjectBoardProps) {
  return (
    <div className="ProjectsBoard">
      {projects.map((project, key) => (
        <ProjectCard
          id={key}
          name={project.name}
          shortDescription={project.shortDescription}
          imgSrc={project.imgSrc}
        />
      ))}
    </div>
  );
}
