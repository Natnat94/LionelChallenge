import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the default icon issue with Leaflet and Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapComponent = ({ setLocation, style, points, onMarkerClick }) => {
  const [error, setError] = useState(null);
  const location = points[0] || {};

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // const renderSinglePoint = () => {
  //   return (
  //     <Marker position={[location.latitude, location.longitude]}>
  //       <Popup>You are here!</Popup>
  //     </Marker>
  //   );
  // };

  const renderPoints = () => {
    return points.map((point, index) => (
      <Marker
        key={index}
        position={[point.latitude, point.longitude]}
        eventHandlers={{
          click: (e) => {
            e.originalEvent.stopPropagation();
            onMarkerClick(point);
          },
        }}
      >
        <Popup>{point.name ? point.name : `Point ${index + 1}`}</Popup>
      </Marker>
    ));
  };

  return (
    <div>
      {location.latitude && location.longitude && (
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={13}
          style={{ height: "80px", width: "100%", ...style }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {renderPoints()}
        </MapContainer>
      )}
    </div>
  );
};

export default MapComponent;
