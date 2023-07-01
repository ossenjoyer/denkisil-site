import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/MainPage.css";

export default function NotFoundPage() {
  const { i18n } = useTranslation();

  return (
    <div className="AppMainPageContent">
      <div className="AppMainPageLeftContentBox">
        <div className="AppMainPageAlignHelper">
          <h1>{i18n.t("NotFoundPage.WelcomeBanner.Title")}</h1>
          <p>
            {i18n.t("NotFoundPage.WelcomeBanner.Introduction.0")}&nbsp;
            <Link to={`/`}>
              {i18n.t("NotFoundPage.WelcomeBanner.Introduction.1")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
