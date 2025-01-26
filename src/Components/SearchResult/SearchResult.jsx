import { useContext, useEffect, useState } from "react";
import "./SearchResult.css";
import { Download } from "@mui/icons-material";
import { searchContext } from "../searchContent";
import axios from "axios";

const SearchResult = () => {
  const [pictures, setPictures] = useState([]);
  const { result, loading, error, getPics, page } = useContext(searchContext); // Get result, page, and getPics function from context

  // Effect to update pictures when result changes
  useEffect(() => {
    if (result && result.length > 0) {
      setPictures(result); // Update the pictures state when the result changes
    }
  }, [result]);

  // Function to load more pictures when 'Load More' button is clicked
  const loadMorePictures = () => {
    getPics( page); // Pass the query ('nature' in this case) and the current page number to getPics
  };

  // Function to download image
  const handleDownload = async (imageUrl, alt) => {
    try {
      const response = await axios.get(imageUrl, { responseType: "blob" });
      const blobUrl = URL.createObjectURL(response.data);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = alt || "downloaded_image"; // Default filename if alt is missing
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
      console.log("Download initiated successfully");
    } catch (error) {
      console.error("Error downloading the image:", error.message);
      alert("Failed to download the image. Please try again.");
    }
  };

  return (
    <div className="Pictures">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="picture-box">
            {pictures?.map((pic, index) => (
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
            ))}
          </div>

          <button className="more-pictures-btn" onClick={loadMorePictures}>
            More Pictures
          </button>
        </>
      )}
    </div>
  );
};

export default SearchResult;
