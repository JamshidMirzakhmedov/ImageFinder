import React from "react";
import ImageDownloaderBtn from "./ImageDownloaderBtn";
export function ImageItem({ item }) {
  return (
    <div>
      <img
        key={item.id}
        src={item?.urls?.regular}
        className="img"
        alt={item?.alt_description}
      />
      <p className="likes">{item.likes} likes</p>
      {/* <ImageDownloaderBtn photoId={item?.id} /> */}
    </div>
  );
}
