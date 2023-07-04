import { Suspense } from "react";
import OnLoadComponent from "./components/OnLoad";
import { useSelector } from "react-redux";

import AppRoutes from "./routes";
import { DarkTheme, LigthTheme } from "./utils/globalStyles";

import "./styles/App.css";
import i18n from "./utils/i18n";

function App() {
  const theme = useSelector((state) => state.style.theme);
  const language = useSelector((state) => state.language.lang.payload);

  i18n.changeLanguage(language || "en");

  return (
    <>
      {theme === "ligth" ? (
        <LigthTheme />
      ) : theme === "dark" ? (
        <DarkTheme />
      ) : null}
      <Suspense fallback={<OnLoadComponent />}>
        <div className="App">
          <AppRoutes />
        </div>
      </Suspense>
    </>
  );
}

export default App;
