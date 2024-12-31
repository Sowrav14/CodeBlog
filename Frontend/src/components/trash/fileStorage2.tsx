import { useEffect, useState } from "react";

function Imageviewer(){
    const [imageSrc, setImageSrc] = useState<string | null>(null); // State for image source
     // Retrieve file from local storage on mount
    useEffect(() => {
        const savedFile = localStorage.getItem('fileData');
        if (savedFile) {
            setImageSrc(savedFile);
        }
    }, []);

    return(
        <div>
            {imageSrc ? (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img
                        src={imageSrc}
                        alt="Uploaded Preview"
                        style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
                    />
                </div>
            ) : (
                <h3> Upload Image </h3>
            )}
        </div>
    )
}

export default Imageviewer;