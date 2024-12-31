import React, { useRef, useState } from "react";

const ImageUploader: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference to file input
//   const [imageSrc, setImageSrc] = useState<string | null>(null); // State for image source

  const handleImageUpload = (): void => {
    if (fileInputRef.current && fileInputRef.current.files) {
      const file = fileInputRef.current.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target && e.target.result) {
            // setImageSrc(e.target.result as string); // Set the image source
            localStorage.setItem("fileData", e.target.result as string);
            alert("Image is in local Storage");
          }
        };
        reader.readAsDataURL(file); // Read file as Base64
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Image Uploader</h2>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
        style={{ margin: "20px 0" }}
      />
    </div>
  );
};

export default ImageUploader;
