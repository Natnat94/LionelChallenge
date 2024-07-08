import React, { useState } from "react";
import ButtonComponent from "system/button/button-component";

const UploadPhotoButton = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
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
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {!selectedImage && (
          <ButtonComponent
            text="Upload Photo"
            onClick={() => document.getElementById("upload-photo").click()}
          />
        )}
      </label>
      {selectedImage && (
        <>
          {" "}
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
          <ButtonComponent
            type="submit"
            style={{ marginTop: "10px" }}
            text="Submit"
            onClick={handleSubmit}
          />
        </>
      )}
    </form>
  );
};

export default UploadPhotoButton;
