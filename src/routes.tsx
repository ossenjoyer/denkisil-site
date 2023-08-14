import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import MainPage from "@pages/MainPage";
import NotFoundPage from "@pages/NotFoundPage";
import CVPage from "@pages/CVPage";
import ProjectsPage from "@pages/ProjectsPage";
import SupportPage from "@pages/SupportPage";
import Menu from "components/Menu";

import "@styles/MainPage.css";

export default function AppRouter() {
  function openMenu() {
    const menu = document.getElementById("Menu") as HTMLElement;

    menu.setAttribute("style", "display: flex;");
  }

  return (
    <BrowserRouter>
      <div className="AppContent">
        <Menu />

        <div className="AppMainPageContent">
          <div className="AppContentBox" id="OpenMenu" onClick={openMenu}>
            <h4>Menu</h4>
          </div>

          <Routes>
            <Route index path="/" element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/resume" element={<CVPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
