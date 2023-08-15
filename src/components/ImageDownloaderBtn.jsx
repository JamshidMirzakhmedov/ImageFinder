import React from "react";
import { saveAs } from "file-saver";
import { useAppContext } from "../AppContext";

const ImageDownloaderBtn = ({ photoId }) => {
  const { searchValue } = useAppContext();
  const handleDownloadClick = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/${photoId}/download`,
        {
          headers: {
            Authorization:
              "Client-ID J7pT3Rgy_uQDjGPFHpwK6xrMynSupSdVx4ZHcTuZNig",
          },
        }
      );

      const blob = await response.blob();
      saveAs(blob, `${searchValue}.png`);
    } catch (error) {
      console.error("Error fetching or downloading the image:", error);
    }
  };

  return (
    <div>
      <button className="btn" onClick={handleDownloadClick}>
        Download Image
      </button>
    </div>
  );
};

export default ImageDownloaderBtn;
