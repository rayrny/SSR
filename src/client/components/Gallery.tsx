import React from "react";
import { useGetImages } from "../hooks/useFetchImages";

function Gallery() {
  const { data: images = [] } = useGetImages();

  return (
    <>
      <h3>여기는 고양이 사진들이 보여질거야</h3>

      {images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.url} />
          </div>
        );
      })}
    </>
  );
}

export default Gallery;
