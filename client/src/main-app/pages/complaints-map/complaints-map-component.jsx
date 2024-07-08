import { useState } from "react";
import MapComponent from "../complaint-page/map/map-component";
import ButtonComponent from "system/button/button-component";
import "./complaints-map-component.scss";

export default function ComplaintsMapComponent({ reportAComplaintPage }) {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  return (
    <div className="complaints-map-component">
      <div className="map-wrapper">
        <MapComponent
          location={location}
          setLocation={setLocation}
          style={{ height: "1000px", width: "100%", zIndex: 1 }}
        />
      </div>
      <div className="overlay" />
      <ButtonComponent
        text="Report an issue"
        className={"report-button"}
        onClick={reportAComplaintPage}
      />
    </div>
  );
}
