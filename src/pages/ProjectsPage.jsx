import { useTranslation } from "react-i18next";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/Projects";

import "../styles/MainPage.css";

export default function ProjectsPage() {
  const { i18n } = useTranslation();

  return (
    <div className="AppMainPageContent">
      <div className="AppMainPageCenterContentBox">
        <div className="AppMainPageAlignHelper">
          <h1>{i18n.t("ProjectsPage.WelcomeBanner.Title")}</h1>
          <p>{i18n.t("ProjectsPage.WelcomeBanner.Introduction")}</p>
        </div>
      </div>
      <div className="AppMainPageCenterContentBox">
        {projects[i18n.t("ProjectsPage.Projects")].map((project, index) => (
          <ProjectCard
            projectId={index}
            projectPreview={require("../images/" + project.preview)}
            projectTitle={project.name}
            projectShortDescription={project.shortDescription}
          />
        ))}
      </div>
    </div>
  );
}
