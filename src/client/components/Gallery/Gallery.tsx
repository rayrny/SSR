import { Fragment, useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { useGetImages } from "../../hooks.query/useFetchImages";
import { usePreloadImages } from "../../hooks.query/useLoadImages";
import _flatten from "lodash/flatten";
import { assert } from "../../utils/assert";
import PhotoCard from "../PhotoCard";
import MasonryLayout from "../MasonryLayout";
import { ImpressionArea } from "./ImpressionArea";

const IMAGE_WIDTH = "324px";
const GRID_AUTO_ROWS = 10;
const GRID_ROW_GAP = 10;
const GRID_COLUMN_GAP = 8;

function Gallery() {
  const {
    data: images,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetImages({
    pageParam: 0,
  });

  assert(images != null, "images가 null일 수 없습니다."); // suspense 사용 시 데이터가 존재하는 것이 보장되므로 타입 단언
  const currentPage = images.pages.length - 1;

  const { data: preloadedImages } = usePreloadImages(
    _flatten(images.pages.map((page) => page.data)),
    currentPage
  );

  return (
    <>
      <MasonryLayout
        columnSize={IMAGE_WIDTH}
        rowSize={GRID_AUTO_ROWS}
        columnGap={GRID_COLUMN_GAP}
        rowGap={GRID_ROW_GAP}
      >
        {preloadedImages?.map((image) => (
          <PhotoCard
            src={image.src}
            id={image.id}
            width={IMAGE_WIDTH}
            key={image.id}
          />
        ))}
      </MasonryLayout>

      {isFetchingNextPage && <h3>사진을 더 가져오는 중이야...</h3>}

      {preloadedImages != null && (
        <ImpressionArea
          onImpressionStart={() => {
            if (!isFetchingNextPage) {
              fetchNextPage({ pageParam: currentPage + 1 });
            }
          }}
        />
      )}
    </>
  );
}

export default Gallery;
