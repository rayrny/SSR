import ErrorBoundary from "../components/ErrorBoundary";
import Gallery from "../components/Gallery/Gallery";
import GalleryErrorFallback from "../components/Gallery/Gallery.error";
import GalleryLoadingFallback from "../components/Gallery/Gallery.loading";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SSRSuspense from "../components/SSRSuspense";

function Home() {
  return (
    <>
      <Header />
      <Navigation />

      <ErrorBoundary fallback={<GalleryErrorFallback />}>
        <SSRSuspense fallback={<GalleryLoadingFallback />}>
          <Gallery />
        </SSRSuspense>
      </ErrorBoundary>
    </>
  );
}

export default Home;
