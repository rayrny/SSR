import React, { useEffect, useState } from "react";
import { useGetImages } from "../hooks/useFetchImages";
import { assert } from "../utils/assert";

function Gallery() {
  const { data: images } = useGetImages();

  // suspense 사용 시 데이터가 존재하는 것이 보장되므로 타입 단언
  assert(images != null, "images가 null일 수 없습니다.");

  return (
    <>
      <h3>내 고양이 짱 귀엽지!</h3>

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
