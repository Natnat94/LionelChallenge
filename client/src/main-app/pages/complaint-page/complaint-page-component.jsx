import { useState } from "react";
import ButtonComponent from "system/button/button-component";
import TextFieldComponent from "system/text-field/text-field-component";
import UploadPhotoButton from "./upload-photo/upload-photo-component";
import MapComponent from "./map/map-component";
import { sendComplaint } from "services/complaints-api-service";
import "./complaint-page-component.scss";

export default function ComplaintPageComponent() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [sentComplaint, setSentComplaint] = useState(false);

  const handleSubmit = () => {
    sendComplaint({ description, picture: selectedImage });
    setSentComplaint(true);
  };

  if (sentComplaint) {
    return (
      <div className="sent-complaint">
        <img className="success-image" src="/sent-complaint.png" />
        <div className="complaint-validated">Your declaration is validated</div>
      </div>
    );
  }

  return (
    <div className="complaint-page-component">
      <div className="complaint-location">
        <MapComponent
          location={location}
          setLocation={setLocation}
          style={{ height: 0, width: 0 }}
        />
      </div>
      <div className="complaint-form">
        <div className="complaint-form-content">
          <div className="complaint-description">
            <div className="complaint-sub-header">
              Add a description of the accessibility issue
            </div>
            <TextFieldComponent
              label="Description"
              multiline
              value={description}
              onChange={setDescription}
            />
          </div>
          <div className="complaint-address">
            <div className="complaint-sub-header">
              Add the address of the accessibility issue
            </div>
            <TextFieldComponent label="Address" onChange={setAddress} />
          </div>
          <div className="complaint-upload-photo">
            <div className="complaint-sub-header">
              Add photos of the accessibility issue
            </div>
            <UploadPhotoButton
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          </div>
          <ButtonComponent text="Send" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
