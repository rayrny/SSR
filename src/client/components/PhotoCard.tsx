import React from "react";

function PhotoCard({ id, src }: IPhotoCard) {
  return (
    <div key={id}>
      <img src={src} />
    </div>
  );
}

export default PhotoCard;

interface IPhotoCard {
  id: string;
  src: string;
}
