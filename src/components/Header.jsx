import { Link } from "react-router-dom";
import { useState } from "react";

import HeaderLinksBlock from "./HeaderLinksBlock";

import hamburgerIcon from "../icons/hamburger.svg";
import "../styles/Header.css";

export default function Header() {
  const [isActive, setActive] = useState(false);
  // const { i18n } = useTranslation("common");

  const isMobileDevice = window.matchMedia("(max-width: 800px)").matches;

  return (
    <div className="AppHeader">
      <div className="AppLogoBlock">
        <h1 className="AppLogo">
          <Link to={`/`}>DenKisil</Link>
        </h1>
      </div>
      <div className="AppHamburgerMenu" onClick={() => setActive((pr) => !pr)}>
        <img alt="Menu" src={hamburgerIcon} />
      </div>
      {isActive ? (
        <HeaderLinksBlock />
      ) : !isMobileDevice ? (
        <HeaderLinksBlock />
      ) : null}
    </div>
  );
}
