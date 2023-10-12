import React, { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/api";
import Card from "./components/Card";
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
      <h2>Top Albums</h2>
      <div className="cards-grid">
        {topAlbumsData.map((item) => {
          return <Card data={item} type={"album"} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
