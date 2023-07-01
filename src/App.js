import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import CVPage from "./pages/CVPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import SupportPage from "./pages/SupportPage";
import ProjectPage from "./pages/ProjectPage";
import { Suspense } from "react";
import OnLoadComponent from "./components/OnLoad";

function App() {
  return (
    <Suspense fallback={<OnLoadComponent />}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route index path="/" element={<MainPage />} />
            <Route path="/resume" element={<CVPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
