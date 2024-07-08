import { useEffect, useState } from "react";
import MapComponent from "../complaint-page/map/map-component";
import ButtonComponent from "system/button/button-component";
import { getComplaints } from "services/complaints-api-service";
import "./complaints-map-component.scss";

export default function ComplaintsMapComponent({ reportAComplaintPage }) {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [allComplaints, setAllComplaints] = useState([]);
  const [activeComplaint, setActiveComplaint] = useState(null);

  useEffect(() => {
    const init = async () => {
      let complaints = [];
      try {
        complaints = await getComplaints();
      } catch (e) {
        // alert(`Error in fetching complaints: ${e.error}`);
      }
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

  const onMarkerClick = (complaint) => {
    setActiveComplaint(complaint);
  };

  const closeActiveComplaint = (e) => {
    setActiveComplaint(null);
  };

  return (
    <div className="complaints-map-component">
      <div className="map-wrapper" onClick={closeActiveComplaint}>
        <MapComponent
          location={location}
          setLocation={setLocation}
          points={allComplaints}
          onMarkerClick={onMarkerClick}
          style={{ height: "1000px", width: "100%", zIndex: 1 }}
        />
      </div>
      {/* <div className="overlay" /> */}
      <ButtonComponent
        text="Report an issue"
        className={"report-button"}
        onClick={reportAComplaintPage}
      />

      <div className={`active-complaint ${activeComplaint ? "open" : ""}`}>
        <div className="active-complaint-content">
          <div className="complaint-picture">
            <img src={activeComplaint?.picture || "default_photo.png"} />
          </div>
          <div className="complaint-address">{activeComplaint?.address}</div>
          <div className="complaint-description">
            {activeComplaint?.description}
          </div>
        </div>
      </div>
    </div>
  );
}
