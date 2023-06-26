import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import CVPage from './pages/CVPage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectsPage from './pages/ProjectsPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<NotFoundPage />}/>
            <Route index path="/" element={<MainPage />} />
            <Route path="/resume" element={<CVPage />}/>
            <Route path="/projects" element={<ProjectsPage />}/>
            <Route path="/support" element={<SupportPage />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
