import { Suspense } from "react";
import useMount from "../hooks/useMount";

function SSRSuspense({ children, fallback }: ISSRSuspense) {
  const isMounted = useMount();

  if (!isMounted) {
    return fallback;
  }

  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export default SSRSuspense;

interface ISSRSuspense {
  children: JSX.Element;
  fallback: JSX.Element;
}
