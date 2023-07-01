import { Link } from "react-router-dom";

export default function ProjectCard({
  projectTitle,
  projectShortDescription,
  projectPreview,
  projectId,
}) {
  return (
    <div className="AppMainPageAlignHelper">
      <img
        alt={projectTitle}
        src={projectPreview}
        width={`50%`}
        height={`50%`}
      />
      <h3>
        <Link to={`/project/${projectId}`}>{projectTitle}</Link>
      </h3>
      <p>{projectShortDescription}</p>
    </div>
  );
}
