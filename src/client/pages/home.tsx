import ErrorBoundary from "../components/ErrorBoundary";
import Gallery from "../components/Gallery/Gallery";
import GalleryErrorFallback from "../components/Gallery/Gallery.error";
import GalleryLoadingFallback from "../components/Gallery/Gallery.loading";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import SSRSuspense from "../components/SSRSuspense";

function Home() {
  return (
    <>
      <Header />
      <SearchInput />

      <ErrorBoundary fallback={<GalleryErrorFallback />}>
        <SSRSuspense fallback={<GalleryLoadingFallback />}>
          <Gallery />
        </SSRSuspense>
      </ErrorBoundary>
    </>
  );
}

export default Home;
