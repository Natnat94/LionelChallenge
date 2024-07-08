import { useEffect, useState } from "react";
import MapComponent from "../complaint-page/map/map-component";
import ButtonComponent from "system/button/button-component";
import { getComplaints } from "services/complaints-api-service";
import "./complaints-map-component.scss";

export default function ComplaintsMapComponent({ reportAComplaintPage }) {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [allComplaints, setAllComplaints] = useState([]);

  useEffect(() => {
    const init = async () => {
      const complaints = (await getComplaints()) || {};
      const complaintsWithLocation = [];
      for (const complaint of complaints) {
        if (complaint.location) {
          const [latitude, longitude] = complaint.location.split(",");
          complaint.latitude = latitude;
          complaint.longitude = longitude;
          complaintsWithLocation.push(complaint);
        }
      }
      setAllComplaints(complaintsWithLocation);
    };
    init();
  }, []);

  return (
    <div className="complaints-map-component">
      <div className="map-wrapper">
        <MapComponent
          location={location}
          setLocation={setLocation}
          points={allComplaints}
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
