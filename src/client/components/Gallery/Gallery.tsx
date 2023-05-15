import React, {
  Fragment,
  useEffect,
  useState,
  useRef,
  createRef,
  MutableRefObject,
} from "react";
import styled from "styled-components";
import { ICatImages, useGetImages } from "../../hooks/useFetchImages";
import { assert } from "../../utils/assert";
import PhotoCard, { TImageRef } from "../PhotoCard";

const GRID_AUTO_ROWS = 10;
const GRID_ROW_GAP = 6;
const GRID_COLUMN_GAP = 8;

const setMasonryLayout = (itemsRef) => {
  itemsRef.forEach((itemRef) => {
    const {
      current: { isLoaded, ref },
    } = itemRef;
    const catImage: HTMLImageElement = ref.current;
    const gridItem: HTMLElement | null = catImage.parentElement;

    // ref를 통해 접근한 엘리먼트가 null일 수 없으므로 타입 단언
    assert(catImage != null, "catImage가 null일 수 없습니다.");
    assert(gridItem != null, "gridItem가 null일 수 없습니다.");

    if (!isLoaded) {
      // 안전할지? 꼭 필요할지?
      itemsRef.push(itemRef);
      return false;
    }

    const imageHeight = catImage.scrollHeight;

    const gridRowEndStyle = `grid-row-end: span ${Math.floor(
      imageHeight / GRID_AUTO_ROWS + GRID_COLUMN_GAP / GRID_AUTO_ROWS
    )}`;
    gridItem.setAttribute("style", gridRowEndStyle);
  });
};

function Gallery() {
  const { data: images } = useGetImages();
  const masonaryContainerRef = useRef(null);

  const [masonaryItemsRef, setMasonaryItemsRef] = useState<
    MutableRefObject<TImageRef>[]
  >([]);

  // suspense 사용 시 데이터가 존재하는 것이 보장되므로 타입 단언
  assert(images != null, "images가 null일 수 없습니다.");

  useEffect(() => {
    // 맨 처음에 중복으로 조정되는 부분 (붙는 순서에 따라) 개선 필요
    setMasonryLayout(masonaryItemsRef);
    return window.removeEventListener("resize", () =>
      setMasonryLayout(masonaryItemsRef)
    );
  }, [masonaryItemsRef]);

  return (
    <MasonryLayout ref={masonaryContainerRef}>
      {images.map((image) => (
        <Item key={image.id}>
          <PhotoCard
            src={image.url}
            id={image.id}
            onSetRefs={setMasonaryItemsRef}
          />
        </Item>
      ))}
    </MasonryLayout>
  );
}

const MasonryLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(324px, 1fr));
  // grid-auto-rows: ${GRID_AUTO_ROWS}px;
  justify-content: center;
  gap: ${GRID_ROW_GAP}px ${GRID_COLUMN_GAP}px;
  height: 100%;
`;

const Item = styled.div``;

export default Gallery;
