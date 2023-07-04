import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/MainPage.css";

export default function CVPage() {
  const { i18n } = useTranslation();

  return (
    <div className="AppMainPageContent">
      <div className="AppMainPageLeftContentBox">
        <div className="AppMainPageAlignHelper">
          <h1>{i18n.t("CVPage.CV.Title")}</h1>
          <p>{i18n.t("Caps.InProgress")}</p>
        </div>
      </div>
      <div className="AppMainPageLeftContentBox">
        <div className="AppMainPageAlignHelper">
          <h1>{i18n.t("CVPage.Resume.Title")}</h1>
          <p>{i18n.t("Caps.InProgress")}</p>
        </div>
      </div>
      <div className="AppMainPageLeftContentBox">
        <div className="AppMainPageAlignHelper">
          <h1>{i18n.t("CVPage.Projects.Title")}</h1>
          <p>
            {i18n.t("CVPage.Projects.Introduction.0")}
            <Link to={`/projects`}>
              {i18n.t("CVPage.Projects.Introduction.1")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
