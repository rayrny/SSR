import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface Props {
  onImpressionStart: () => void;
}

export function ImpressionArea({ onImpressionStart }: Props) {
  const targetRef = useRef(null);
  const onImpressionCallbackRef = useRef(onImpressionStart);

  if (onImpressionCallbackRef.current !== onImpressionStart) {
    onImpressionCallbackRef.current = onImpressionStart;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          const isMe = targetRef.current === target;

          if (isMe && isIntersecting) {
            onImpressionCallbackRef.current();
          }
        });
      },
      {
        root: null,
        rootMargin: `16px 0px`,
      }
    );

    if (targetRef.current == null) return;
    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, []);

  return <TargetArea ref={targetRef} />;
}

const TargetArea = styled.div`
  height: 100px;
`;
