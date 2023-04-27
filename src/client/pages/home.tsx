import React, { Suspense } from "react";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";

const Fallback = () => {
  return <h2>사진을 가져오는 중이야 ... </h2>;
};
function Home() {
  return (
    <>
      <Header />
      <SearchInput />

      <Suspense fallback={<Fallback />}>
        <Gallery />
      </Suspense>
    </>
  );
}

export default Home;
