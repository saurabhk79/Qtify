import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
import { Autocomplete, TextField, Paper } from "@mui/material";
import Options from "./Options";

function Searchbar({ allAlbumsData }) {
  const [val, setVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [timeOut, setTimeOut] = useState();

  const SONGS_LIST = allAlbumsData.map((song) => song.songs).flat();

  const findSongs = () => {
    let songs = SONGS_LIST.filter((song) => {
      return (
        song.title.toLowerCase().includes(val) ||
        song.artists.join(" ").toLowerCase().includes(val)
      );
    });
    !val ? setFilteredData([]) : setFilteredData(songs);
  };

  const debounceSearch = (value, t) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    let time = setTimeout(() => {
      setVal(value);
    }, t);
    setTimeOut(time);
  };

  const inputChangeHandler = (e) => {
    debounceSearch(e.target.value, 300);
  };

  useEffect(() => {
    findSongs();
  }, [val]);

  return (
    <div className={styles.navSearchBox}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        ListboxProps={{ className: "autoComplete" }}
        PaperComponent={({ children }) => (
          <Paper className={styles.paper}>{children}</Paper>
        )}
        options={filteredData.length ? filteredData : allAlbumsData}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => {
          return (
            <Options
              key={option.id}
              album={option.title}
              follows={option.follows}
              likes={option.likes}
              url={option.image}
              songs={option.songs}
              artistsNames={option.artists}
            />
          );
        }}
        className={styles.textbox}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search input"
            focused
            onChange={inputChangeHandler}
          />
        )}
      />
      <hr />
      <img src="Search icon.svg" alt="search" className={styles.searchIcon} />
    </div>
  );
}

export default Searchbar;
