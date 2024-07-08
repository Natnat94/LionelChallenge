import { useState } from "react";
import ButtonComponent from "system/button/button-component";
import TextFieldComponent from "system/text-field/text-field-component";
import UploadPhotoButton from "./upload-photo/upload-photo-component";
import LocationMap from "./map/map-component";
import { sendComplaint } from "services/complaints-api-service";
import "./complaint-page-component.scss";

export default function ComplaintPageComponent() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    sendComplaint({ description });
  };

  return (
    <div className="complaint-page-component">
      <div className="complaint-location">
        {/* <TextFieldComponent label="Address" /> */}
        <LocationMap />
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
          <div className="complaint-upload-photo">
            <div className="complaint-sub-header">
              Add photos of the accessibility issue
            </div>
            <UploadPhotoButton />
          </div>
          <ButtonComponent text="Send" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
