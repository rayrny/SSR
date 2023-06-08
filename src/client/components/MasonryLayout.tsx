import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export type TMasonryLayout = {
  children: React.ReactNode;
  columnSize: string;
  rowSize: number;
  columnGap: number;
  rowGap: number;
  /**
   * children이 변경될 때 레이아웃을 다시 계산하기 위한 props
   * useCallback을 의도적으로 감싸지 않은 빈 함수를 넘겨줌으로써 리렌더링 유발
   */
  shouldUpdate: () => void;
};

const setMasonryLayout = (
  containerRef: React.RefObject<HTMLDivElement>,
  rowSize: number,
  rowGap: number
) => {
  if (containerRef.current == null) return;

  const items = containerRef.current.children;

  for (let item of items) {
    const height = item.scrollHeight;
    const gridRowEndStyle = `grid-row-end: span ${Math.floor(
      (height + rowGap) / (rowSize + rowGap)
    )}`;

    item.setAttribute("style", gridRowEndStyle);
  }
};

function MasonryLayout({
  children,
  columnSize,
  rowSize,
  columnGap,
  rowGap,
  shouldUpdate,
}: TMasonryLayout) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMasonryLayout(containerRef, rowSize, rowGap);
  }, [shouldUpdate]);

  return (
    <Container
      ref={containerRef}
      columnSize={columnSize}
      columnGap={columnGap}
      rowGap={rowGap}
    >
      {children}
    </Container>
  );
}

const Container = styled.div<Partial<TMasonryLayout>>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.columnSize}, 1fr)
  );
  grid-auto-rows: ${(props) => props.rowSize}px;
  justify-content: center;
  gap: ${(props) => props.rowGap}px ${(props) => props.columnGap}px;
  height: 100%;
`;

export default MasonryLayout;
