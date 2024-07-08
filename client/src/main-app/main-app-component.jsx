import React, { useState } from "react";
import WelcomePageComponent from "./pages/welcome-page/welcome-page-component";
import "./main-app-component.scss";

const PAGES = {
  WELCOME_PAGE: "WELCOME_PAGE",
  COMPLAINT_PAGE: "COMPLAINT_PAGE",
};

export default function MainAppComponent() {
  const [page, setPage] = useState(PAGES.WELCOME_PAGE);

  return (
    <div className="main-app-component">
      <WelcomePageComponent />
    </div>
  );
}
