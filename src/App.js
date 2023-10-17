import React, { useEffect, useState } from "react";

import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import CarouselSection from "./components/CarouselSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);

  const generateTopAlbums = async () => {
    const data = await fetchTopAlbums();

    setTopAlbumsData(data);
  };

  const generateNewAlbums = async () => {
    const data = await fetchNewAlbums();

    setNewAlbumsData(data);
  };

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <CarouselSection
          data={topAlbumsData}
          title={"Top Albums"}
          type={"album"}
        />

        <CarouselSection
          data={newAlbumsData}
          title={"New Albums"}
          type={"album"}
        />
      </div>
    </div>
  );
}

export default App;
