import React, { useEffect, useState } from "react";

import { fetchTopAlbums } from "./api/api";
import CarouselSection from "./components/CarouselSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbums = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    setTopAlbumsData(data);
  };

  useEffect(() => {
    generateTopAlbums();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <CarouselSection
        data={topAlbumsData}
        title={"Top Albums"}
        type={"album"}
      />
    </div>
  );
}

export default App;
