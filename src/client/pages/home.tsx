import styled from "styled-components";

import ErrorBoundary from "../components/ErrorBoundary";
import Gallery from "../components/Gallery/Gallery";
import GalleryErrorFallback from "../components/Gallery/Gallery.error";
import GalleryLoadingFallback from "../components/Gallery/Gallery.loading";
import Header from "../components/Header";
import SSRSuspense from "../components/SSRSuspense";

function Home() {
  return (
    <Page>
      <Header />

      <ErrorBoundary fallback={<GalleryErrorFallback />}>
        <SSRSuspense fallback={<GalleryLoadingFallback />}>
          <Gallery />
        </SSRSuspense>
      </ErrorBoundary>
    </Page>
  );
}

const Page = styled.div`
  padding: 2rem 0;
`;

export default Home;
