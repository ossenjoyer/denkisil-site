import Button from "./Button";

export interface ProjectCardProps {
  id: number;
  name: string;
  shortDescription: string;
  imgSrc: string;
}

export default function ProjectCard({
  id,
  name,
  shortDescription,
  imgSrc
}: ProjectCardProps) {
  return (
    <div className="ProjectCard">
      <h3>{name}</h3>
      <p>{shortDescription}</p>
      <Button title="More information" />
    </div>
  );
}
