import React, { useState, useRef } from "react";
import ButtonComponent from "system/button/button-component";

const UploadPhotoButton = ({ selectedImage, setSelectedImage }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // You can now use the selected image file, e.g., display it or upload it to a server
      console.log(file);
      setSelectedImage(event.target.files[0]);
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
            text="Take a photo"
            onClick={() => document.getElementById("upload-photo").click()}
          />
        )}
      </label>
      {selectedImage && (
        <div>
          <img
            src={URL.createObjectURL(selectedImage)}
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
