import { ImageItem } from "./ImageItem";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAppContext } from "../AppContext";
import ImageDownloaderBtn from "./ImageDownloaderBtn";
import Loader from "./Loader";

const url =
  "https://api.unsplash.com/search/photos/?client_id=J7pT3Rgy_uQDjGPFHpwK6xrMynSupSdVx4ZHcTuZNig";

const Gallery = () => {
  const { searchValue } = useAppContext();

  const fetchData = async () => {
    const res = await fetch(`${url}&query=${searchValue}`);
    return res.json();
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["images", searchValue],
    queryFn: fetchData,
  });

  // useEffect(() => {
  //   fetchData();
  // }, [searchValue]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="image-container">
        <h4>Error fetching data</h4>
      </div>
    );
  }

  return (
    <section className="gallery">
      {data?.results.length ? (
        <h4>{data?.results.length} images found</h4>
      ) : (
        <h4>Nothing found</h4>
      )}

      <div className="image-container">
        {data?.results?.map((item) => (
          <ImageItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
