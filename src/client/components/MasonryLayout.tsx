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
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (itemRef.current == null) {
      return;
    }

    const height = itemRef.current.scrollHeight;
    const gridRowEndStyle = `grid-row-end: span ${Math.floor(
      (height + rowGap) / (rowSize + rowGap)
    )}`;

    itemRef.current.setAttribute("style", gridRowEndStyle);
  }, [children]);

  return <div ref={itemRef}>{children}</div>;
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
