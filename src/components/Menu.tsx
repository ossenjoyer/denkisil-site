import React, { useState } from "react";
import "@styles/Menu.css";
import Button from "./Button";
import { useNavigate } from "react-router";

export default function Menu() {
  const [pageTitle, setPageTitle] = useState("Main Page");
  const navigate = useNavigate();

  function changePageTitle(event: any) {
    const pageTitleEl = document.getElementById("currPageName");

    const newPageTitle = event.target.textContent;

    setPageTitle(newPageTitle);
  }

  function pageButtonOnclick(event: any, url: string) {
    changePageTitle(event);

    navigate(url);
  }

  return (
    <div className="Menu">
      <h1 className="CurrPageName" id="currPageName">
        {pageTitle}
      </h1>
      <Button
        title="Main Page"
        id={`mainPage`}
        onClick={(event) => pageButtonOnclick(event, "/")}
      />
      <Button
        title="CV"
        id={`resumePage`}
        onClick={(event) => pageButtonOnclick(event, "/resume")}
      />
      <Button
        title="Projects"
        id={`projectsPage`}
        onClick={(event) => pageButtonOnclick(event, "/projects")}
      />
      <Button
        title="Support"
        id={`supportPage`}
        onClick={(event) => pageButtonOnclick(event, "/support")}
      />
    </div>
  );
}
