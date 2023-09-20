import styled from "styled-components";

interface IPhotoCard {
  src: string;
  id: string;
  width: string;
}

function PhotoCard({ src, id, width }: IPhotoCard) {
  return <Image src={src} width={width} id={`image-${id}`} alt="cat-image" />;
}

const Image = styled.img`
  border-radius: 8px;
  cursor: pointer;
`;

export default PhotoCard;
