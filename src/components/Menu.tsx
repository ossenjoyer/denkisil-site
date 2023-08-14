import { Transition } from "react-transition-group";
import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import Button from "./Button";

import "@styles/Menu.css";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const [pageTitle, setPageTitle] = useState("DenKisil");
  const { i18n } = useTranslation();
  const nodeRef = useRef(null);
  const navigate = useNavigate();

  const isMobileDevice = window.matchMedia("(max-width: 800px)").matches;

  function changePageTitle(event: any) {
    const newPageTitle = event.target.textContent;

    setPageTitle(newPageTitle);
  }

  function pageButtonOnclick(event: any, url: string) {
    changePageTitle(event);

    isMobileDevice ? hideMenu() : null;

    navigate(url);
  }

  function hideMenu() {
    const menu = document.getElementById("Menu") as HTMLElement;

    menu.setAttribute("style", "display: none;");
  }

  return (
    <div className="Menu" id="Menu" ref={nodeRef}>
      <div className="MenuHeader" onClick={hideMenu}>
        <h4>Close</h4>
      </div>
      <h1 className="CurrPageName" id="currPageName">
        {pageTitle}
      </h1>
      <Button
        title={i18n.t("Menu.Links.MainPage")}
        id={`mainPage`}
        onClick={(event) => pageButtonOnclick(event, "/")}
      />
      <Button
        title={i18n.t("Menu.Links.CVPage")}
        id={`resumePage`}
        onClick={(event) => pageButtonOnclick(event, "/resume")}
      />
      <Button
        title={i18n.t("Menu.Links.ProjectsPage")}
        id={`projectsPage`}
        onClick={(event) => pageButtonOnclick(event, "/projects")}
      />
      <Button
        title={i18n.t("Menu.Links.SupportPage")}
        id={`supportPage`}
        onClick={(event) => pageButtonOnclick(event, "/support")}
      />
    </div>
  );
}
