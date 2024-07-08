import TextFieldComponent from "system/text-field/text-field-component";
import UploadPhotoButton from "./upload-photo/upload-photo-component";
import "./complaint-page-component.scss";

export default function ComplaintPageComponent() {
  return (
    <div className="complaint-page-component">
      <div className="complaint-header">Tell us what bothers you</div>
      <div className="complaint-description">
        <TextFieldComponent label="Description" />
      </div>
      <div className="complaint-location">
        <TextFieldComponent label="Location" />
      </div>
      <div className="complaint-upload-photo">
        {/* <ButtonComponent text="Upload photo" /> */}
        <UploadPhotoButton />
      </div>
    </div>
  );
}
