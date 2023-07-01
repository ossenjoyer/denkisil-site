import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeaderLinksBlock() {
  const { i18n } = useTranslation();

  return (
    <div className="AppHeaderLinksBlock">
      <ul className="AppHeaderLinks">
        <Link to={`/resume`} className="AppHeaderLink">
          {i18n.t("Header.Links.CV")}
        </Link>
        <Link to={`/projects`} className="AppHeaderLink">
          {i18n.t("Header.Links.Projects")}
        </Link>
        <Link to={`/support`} className="AppHeaderLink">
          {i18n.t("Header.Links.Support")}
        </Link>
        <div className="AppHeaderBlock">
          <select
            value={i18n.language}
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
            }}
          >
            <option value="en">English</option>
            <option value="ua">Українська</option>
          </select>
        </div>
      </ul>
    </div>
  );
}
