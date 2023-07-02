import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme, ligthTheme } from "../store/themeSlice";

export default function HeaderLinksBlock() {
  const { i18n } = useTranslation();
  const theme = useSelector((state) => state.style.theme);
  console.log(theme);
  const dispatch = useDispatch();

  function changeTheme() {
    if (theme === "ligth") return dispatch(darkTheme());
    else if (theme === "dark") return dispatch(ligthTheme());
  }

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
        <a href="#" className="AppHeaderLink" onClick={() => changeTheme()}>
          {i18n.t("Header.Links.ChangeTheme")}
        </a>
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
