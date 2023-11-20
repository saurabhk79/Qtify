import React, { useEffect, useState } from "react";

import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [allAlbumsData, setAllAlbumsData] = useState([]);

  const [value, setValue] = useState(0);

  const generateTopAlbums = async () => {
    const data = await fetchTopAlbums();

    setTopAlbumsData(data);
  };

  const generateNewAlbums = async () => {
    const data = await fetchNewAlbums();

    setNewAlbumsData(data);
  };

  const generateAllSongsData = async () => {
    const data = await fetchSongs();

    setSongsData(data);
    setFilteredSongs(data);
  };

  const generateSongs = (value) => {
    let key;

    switch (value) {
      case 0:
        filterDataFun(songsData);
        return;
      case 1:
        key = "jazz";
        break;
      case 2:
        key = "rock";
        break;
      case 3:
        key = "pop";
        break;
      case 4:
        key = "blues";
        break;
      default:
        filterDataFun([]);
    }

    const filteredRes = songsData.filter((song) => song.genre.key === key);
    filterDataFun(filteredRes);
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const filterDataFun = (newValue) => {
    setFilteredSongs(newValue);
  };

  useEffect(() => {
    generateSongs(value);
  }, [value]);

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
    generateAllSongsData();
  }, []);

  useEffect(() => {
    if (topAlbumsData && topAlbumsData) {
      setAllAlbumsData([...topAlbumsData, ...newAlbumsData]);
    }
  }, [topAlbumsData, newAlbumsData]);

  return (
    <div>
      <Navbar allAlbumsData={allAlbumsData} />
      <Hero />
      <div>
        <Section data={topAlbumsData} title={"Top Albums"} type={"album"} />
        <Section data={newAlbumsData} title={"New Albums"} type={"album"} />
        <Section
          data={filteredSongs}
          title={"Songs"}
          type={"songs"}
          value={value}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
