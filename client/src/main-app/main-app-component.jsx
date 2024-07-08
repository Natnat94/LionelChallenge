import React, { useState } from "react";
import WelcomePageComponent from "./pages/welcome-page/welcome-page-component";
import ComplaintPageComponent from "./pages/complaint-page/complaint-page-component";
import "./main-app-component.scss";

const PAGES = {
  WELCOME_PAGE: {
    id: "WELCOME_PAGE",
    component: WelcomePageComponent,
  },
  COMPLAINT_PAGE: {
    id: "COMPLAINT_PAGE",
    component: ComplaintPageComponent,
  },
};

export default function MainAppComponent() {
  const [page, setPage] = useState(PAGES.WELCOME_PAGE.id);

  const PageComponent = PAGES[page].component;
  const reportAComplaint = () => {
    setPage(PAGES.COMPLAINT_PAGE.id);
  };

  return (
    <div className="main-app-component">
      <PageComponent reportAComplaint={reportAComplaint} />
    </div>
  );
}
