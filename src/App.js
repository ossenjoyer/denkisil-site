import { Suspense } from "react";
import OnLoadComponent from "./components/OnLoad";
import { useSelector } from "react-redux";

import AppRoutes from "./routes";
import { DarkTheme, LigthTheme } from "./utils/globalStyles";

import "./styles/App.css";

function App() {
  const theme = useSelector((state) => state.style.theme);

  return (
    <Suspense fallback={<OnLoadComponent />}>
      {theme === "ligth" ? (
        <LigthTheme />
      ) : theme === "dark" ? (
        <DarkTheme />
      ) : null}
      <div className="App">
        <AppRoutes />
      </div>
    </Suspense>
  );
}

export default App;
