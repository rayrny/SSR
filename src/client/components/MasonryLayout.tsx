import { useEffect, useRef } from "react";
import styled from "styled-components";

export type TMasonryLayout = {
  children: React.ReactNode;
  columnSize: string;
  rowSize: number;
  columnGap: number;
  rowGap: number;
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
}: TMasonryLayout) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMasonryLayout(containerRef, rowSize, rowGap);
  }, []);

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
