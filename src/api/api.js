import axios from "axios";

const ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    let res = await axios.get(`${ENDPOINT}/albums/top`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchNewAlbums = async () => {
  try {
    let res = await axios.get(`${ENDPOINT}/albums/new`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSongs = async () => {
  try {
    let res = await axios.get(`${ENDPOINT}/songs`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchGenre = async () => {
  try {
    let res = await axios.get(`${ENDPOINT}/genres`);

    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};
