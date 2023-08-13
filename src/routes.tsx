import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import MainPage from "@pages/MainPage";
import NotFoundPage from "@pages/NotFoundPage";
import React from "react";
import CVPage from "@pages/CVPage";
import ProjectsPage from "@pages/ProjectsPage";
import SupportPage from "@pages/SupportPage";
import Menu from "components/Menu";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/resume" element={<CVPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </BrowserRouter>
  );
}
