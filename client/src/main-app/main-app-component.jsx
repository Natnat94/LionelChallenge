import React, { useState } from "react";
import WelcomePageComponent from "./pages/welcome-page/welcome-page-component";
import ComplaintPageComponent from "./pages/complaint-page/complaint-page-component";
import ComplaintsMapComponent from "./pages/complaints-map/complaints-map-component";
import InstructionsPageComponent from "./pages/instructions-page/instructions-page-component";
import "./main-app-component.scss";

const PAGES = {
  WELCOME_PAGE: {
    id: "WELCOME_PAGE",
    component: WelcomePageComponent,
  },
  INSTRUCTION_PAGE: {
    id: "INSTRUCTION_PAGE",
    component: InstructionsPageComponent,
  },
  COMPLAINT_PAGE: {
    id: "COMPLAINT_PAGE",
    component: ComplaintPageComponent,
  },
  COMPLAINTS_MAP_PAGE: {
    id: "COMPLAINTS_MAP_PAGE",
    component: ComplaintsMapComponent,
  },
};

export default function MainAppComponent() {
  const [page, setPage] = useState(PAGES.WELCOME_PAGE.id);

  const PageComponent = PAGES[page].component;
  const reportAComplaintPage = () => {
    setPage(PAGES.COMPLAINT_PAGE.id);
  };

  const complaintsMapPage = () => {
    setPage(PAGES.COMPLAINTS_MAP_PAGE.id);
  };

  const instructionsPage = () => {
    setPage(PAGES.INSTRUCTION_PAGE.id);
  };

  return (
    <div className="main-app-component">
      <PageComponent
        reportAComplaintPage={reportAComplaintPage}
        complaintsMapPage={complaintsMapPage}
        InstructionsPage={instructionsPage}
      />
    </div>
  );
}
