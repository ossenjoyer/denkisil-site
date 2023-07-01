import { Link, useParams } from "react-router-dom";
import { projects } from "../data/Projects";

import "../styles/MainPage.css";
import { useTranslation } from "react-i18next";

export default function ProjectPage({ match }) {
  const { projectId } = useParams();
  const { i18n } = useTranslation();

  const project = projects[i18n.language][projectId];

  if (project) {
    return (
      <div className="AppMainPageContent">
        <div className="AppMainPageLeftContentBox">
          <div className="AppMainPageAlignHelperAll">
            <h3>
              <Link to={`/projects`}>⟨ {i18n.t("ProjectPage.BackTo")}</Link>
            </h3>
            <img
              alt="Project preview"
              src={require("../images/" + project.preview)}
              className="AppMainPageProjectPreview"
            />
            <h1>{project.name}</h1>
            <p>
              <Link to={project.link}>{i18n.t("ProjectPage.VisitPage")}</Link>
            </p>
            <p>{project.longDescription}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="AppMainPageContent">
        <div className="AppMainPageLeftContentBox">
          <div className="AppMainPageAlignHelperAll">
            <h1>{i18n.t("ProjectPage.ProjectNotFound.Title")}</h1>
            <p>
              {i18n.t("ProjectPage.ProjectNotFound.BackToProjects.0")}
              <Link to="/projects">
                {i18n.t("ProjectPage.ProjectNotFound.BackToProjects.1")}
              </Link>
            </p>
            <p>
              {i18n.t("ProjectPage.ProjectNotFound.BackToMain.0")}
              <Link to="/">
                {i18n.t("ProjectPage.ProjectNotFound.BackToMain.1")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
