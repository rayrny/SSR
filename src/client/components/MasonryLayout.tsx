import { Children, useEffect, useRef } from "react";
import styled from "styled-components";

export type TMasonryLayout = {
  children: React.ReactNode;
  columnSize: string;
  rowSize: number;
  columnGap: number;
  rowGap: number;
};

function MasonryLayout({
  children,
  columnSize,
  rowSize,
  columnGap,
  rowGap,
}: TMasonryLayout) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <Container
      ref={containerRef}
      columnSize={columnSize}
      columnGap={columnGap}
      rowGap={rowGap}
      style={{ minHeight: containerRef.current?.clientHeight }}
    >
      {Children.map(children, (child, index) => (
        <Item
          rowGap={rowGap}
          rowSize={rowSize}
          key={`${Children.count(children)}-${index}`}
        >
          {child}
        </Item>
      ))}
    </Container>
  );
}

function Item({
  children,
  rowGap,
  rowSize,
}: Omit<TMasonryLayout, "columnGap" | "columnSize">) {
  const itemWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (itemWrapperRef.current == null) {
      return;
    }

    const firstChild = itemWrapperRef.current.querySelector(":first-child");
    if (firstChild == null) {
      return;
    }

    const height = firstChild.scrollHeight;
    const gridRowEndStyle = `grid-row-end: span ${Math.floor(
      (height + rowGap) / (rowSize + rowGap)
    )}`;

    itemWrapperRef.current.setAttribute("style", gridRowEndStyle);
  }, [children]);

  return <div ref={itemWrapperRef}>{children}</div>;
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
