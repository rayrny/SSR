import { Fragment, useState } from "react";

import { useGetImages } from "../../hooks/useFetchImages";
import { usePreloadImages } from "../../hooks/useLoadImages";
import { assert } from "../../utils/assert";
import PhotoCard from "../PhotoCard";
import MasonryLayout from "../MasonryLayout";

const IMAGE_WIDTH = "324px";
const GRID_AUTO_ROWS = 10;
const GRID_ROW_GAP = 10;
const GRID_COLUMN_GAP = 8;

function Gallery() {
  const [page, setPage] = useState(0);
  const { data: images } = useGetImages();
  assert(images != null, "images가 null일 수 없습니다."); // suspense 사용 시 데이터가 존재하는 것이 보장되므로 타입 단언

  const { data: preloadedImages } = usePreloadImages(images, page);
  assert(preloadedImages != null, "preloadedImages가 null일 수 없습니다.");

  return (
    <MasonryLayout
      columnSize={IMAGE_WIDTH}
      rowSize={GRID_AUTO_ROWS}
      columnGap={GRID_COLUMN_GAP}
      rowGap={GRID_ROW_GAP}
    >
      {preloadedImages.map((image) => (
        <Fragment key={image.id}>
          <PhotoCard src={image.src} id={image.id} width={IMAGE_WIDTH} />
        </Fragment>
      ))}
    </MasonryLayout>
  );
}

export default Gallery;
