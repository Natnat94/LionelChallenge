import React, { useState, useRef } from "react";
import ButtonComponent from "system/button/button-component";

const UploadPhotoButton = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // You can now use the selected image file, e.g., display it or upload it to a server
      console.log(file);
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the upload logic here
    alert("Image uploaded successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="upload-photo">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          capture="environment"
          id="upload-photo"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {!selectedImage && (
          <ButtonComponent
            text="Upload Photo"
            onClick={() => document.getElementById("upload-photo").click()}
          />
        )}
      </label>
      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              marginTop: "10px",
            }}
          />
        </div>
      )}
    </form>
  );
};

export default UploadPhotoButton;
