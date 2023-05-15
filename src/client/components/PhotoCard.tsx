import React, {
  createRef,
  Dispatch,
  MutableRefObject,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import styled from "styled-components";
import { useLoadImage } from "../hooks/useLoadImage";

const IMAGE_WIDTH = "324px";
interface IPhotoCard {
  src: string;
  id: string;
  onSetRefs: Dispatch<SetStateAction<MutableRefObject<TImageRef>[]>>;
}

export type TImageRef = {
  isLoaded: boolean;
  ref: RefObject<HTMLImageElement>;
};
function PhotoCard({ src, id, onSetRefs }: IPhotoCard) {
  const { data, isLoading } = useLoadImage(src, id);
  const imageRef = useRef<TImageRef>({
    isLoaded: false,
    ref: createRef(),
  });

  useEffect(() => {
    if (data) {
      imageRef.current.isLoaded = true;
      onSetRefs((prev) => [...prev, imageRef]);
    }
  }, [isLoading]);

  return (
    <Image
      ref={imageRef.current.ref}
      src={src}
      width={IMAGE_WIDTH}
      id={`image-${id}`}
      alt="cat-image"
    />
  );
}

const Image = styled.img`
  border-radius: 8px;
`;

export default PhotoCard;
