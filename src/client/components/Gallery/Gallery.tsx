import { Fragment, useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { useGetImages } from "../../hooks/useFetchImages";
import { usePreloadImages } from "../../hooks/useLoadImages";
import _flatten from "lodash/flatten";
import { assert } from "../../utils/assert";
import PhotoCard from "../PhotoCard";
import MasonryLayout from "../MasonryLayout";

const IMAGE_WIDTH = "324px";
const GRID_AUTO_ROWS = 10;
const GRID_ROW_GAP = 10;
const GRID_COLUMN_GAP = 8;

const initObserver = (callback) => {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: `16px 0px`,
  });
};

let observer;
function Gallery() {
  const [page, setPage] = useState(0);
  const [isIntersect, setIsIntersect] = useState(false);
  const targetRef = useRef(null);

  const { data, fetchNextPage, isFetchingNextPage } = useGetImages({
    pageParam: page,
  });
  assert(data != null, "images가 null일 수 없습니다."); // suspense 사용 시 데이터가 존재하는 것이 보장되므로 타입 단언
  const [images, setImages] = useState(
    _flatten(data.pages.map((page) => page.data))
  );
  // const { data: preloadedImages } = usePreloadImages(images, page);
  // assert(preloadedImages != null, "preloadedImages가 null일 수 없습니다.");

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((target) => {
        if (target.isIntersecting) {
          setIsIntersect(true);
        }
      });
    };

    observer = initObserver(callback);
    observer.observe(targetRef.current);
  }, [isFetchingNextPage]);

  useEffect(() => {
    if (isIntersect && !isFetchingNextPage) {
      setPage((prev) => (prev += 1));
      fetchNextPage();
      setIsIntersect(false);
    }
  }, [isIntersect, isFetchingNextPage]);

  useEffect(() => {
    setImages(_flatten(data.pages.map((page) => page.data)));
  }, [data]);

  return (
    <>
      <MasonryLayout
        columnSize={IMAGE_WIDTH}
        rowSize={GRID_AUTO_ROWS}
        columnGap={GRID_COLUMN_GAP}
        rowGap={GRID_ROW_GAP}
      >
        {images.map((image) => (
          <Fragment key={image.id}>
            <PhotoCard src={image.url} id={image.id} width={IMAGE_WIDTH} />
          </Fragment>
        ))}
      </MasonryLayout>

      {isFetchingNextPage && <h3>다음 사진 로딩중...</h3>}
      <BottomTarget ref={targetRef} isVisible={!isIntersect} />
    </>
  );
}

const BottomTarget = styled.div<{ isVisible: boolean }>`
  height: 100px;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;
export default Gallery;
