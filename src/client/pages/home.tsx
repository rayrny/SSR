import Gallery from "../components/Gallery";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import SSRSuspense from "../components/SSRSuspense";

const Fallback = () => {
  return <h2>사진을 가져오는 중이야 ... </h2>;
};

function Home() {
  return (
    <>
      <Header />
      <SearchInput />

      <SSRSuspense fallback={<Fallback />}>
        <Gallery />
      </SSRSuspense>
    </>
  );
}

export default Home;
