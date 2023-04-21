import React, { Suspense } from "react";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";

function Home() {
  return (
    <>
      <Header />
      <SearchInput />

      <Suspense fallback={<h2>사진을 가져오는 중이야 ... </h2>}>
        <Gallery />
      </Suspense>
    </>
  );
}

export default Home;
