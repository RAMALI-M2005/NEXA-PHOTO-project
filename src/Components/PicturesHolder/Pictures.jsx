import "./Pictures.css";
import { Download } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

const Pictures = () => {
  const [pictures, setPictures] = useState([]);
  const [load, setLoad] = useState(true); // Keep loading true initially

  useEffect(() => {
    const getPictures = async () => {
      try {
        // Fetch 9 random pictures from Unsplash
        const response = await axios.get(
          "https://api.unsplash.com/photos/random?client_id=<YOUR_APP_ACCESS_KEY_FROM_UNSPLASH_API>&count=9"
        );

        // Update the state with the fetched pictures
        setPictures(response.data);
        
      } catch (error) {
        console.log("Error fetching pictures:", error.message);
      } finally {
        // Set load to false after fetching
        setLoad(false);
      }
    };

    // Call the function to get pictures
    getPictures();
  }, []);

  const handleDownload = async (imageUrl, alt) => {
    try {
      // Fetch the image as a blob
      const response = await axios.get(imageUrl, { responseType: "blob" });

      // Create a temporary URL for the blob
      const blobUrl = URL.createObjectURL(response.data);

      // Create an anchor element and set download attributes
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = alt || "downloaded_image"; // Use alt description or default to "downloaded_image"
      document.body.appendChild(link); // Append the link to the body
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up the link after download is triggered

      // Clean up the object URL after the download
      URL.revokeObjectURL(blobUrl);

      console.log("Download initiated successfully");
    } catch (error) {
      console.log("Error downloading the image:", error.message);
    }
  };

  return (
    <div className="Pictures">
      <h1>PICTURES</h1>

      {load ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="picture-box">
            { pictures?.map((pic, index) => {
              return (
                <div className="boxIMG" key={index}>
                  <img
                    src={pic.urls.regular}
                    alt={pic.alt_description || "image"}
                  />
                  <div
                    className="downloadBTN"
                    onClick={() =>
                      handleDownload(pic.urls.full, pic.alt_description || "image")
                    }
                  >
                    <Download />
                  </div>
                </div>
              );
            })
          }
          </div>

          <button className="more-pictures-btn">More Pictures</button>
        </>
      )}
    </div>
  );
};

export default Pictures;
