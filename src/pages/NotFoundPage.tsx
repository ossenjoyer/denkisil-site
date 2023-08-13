import React from "react";
import { Link } from "react-router-dom";

import "@styles/MainPage.css";

export default function NotFoundPage() {
  return (
    <div className="AppMainPageContent">
      <h1>Current page not found</h1>
      <p>
        You can return to <Link to={`/`}>main</Link>
      </p>
    </div>
  );
}
