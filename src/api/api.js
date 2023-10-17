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
