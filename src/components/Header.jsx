import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import HeaderLinksBlock from "./HeaderLinksBlock";

import hamburgerDarkIcon from "../icons/hamburger-dark.svg";
import hamburgerLigthIcon from "../icons/hamburger-ligth.svg";

import "../styles/Header.css";

export default function Header() {
  const [isActive, setActive] = useState(false);

  const theme = useSelector((state) => state.style.theme);

  const isMobileDevice = window.matchMedia("(max-width: 800px)").matches;

  return (
    <div className="AppHeader">
      <div className="AppLogoBlock">
        <h1 className="AppLogo">
          <Link to={`/`}>DenKisil</Link>
        </h1>
      </div>
      <div className="AppHamburgerMenu" onClick={() => setActive((pr) => !pr)}>
        <img
          src={
            theme === "ligth"
              ? hamburgerLigthIcon
              : theme === "dark"
              ? hamburgerDarkIcon
              : null
          }
          width={`64px`}
          height={`64px`}
          alt="Menu"
        />
      </div>
      {isActive ? (
        <HeaderLinksBlock />
      ) : !isMobileDevice ? (
        <HeaderLinksBlock />
      ) : null}
    </div>
  );
}
