// const axios = require("axios");
import axios from "axios";
const URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  //   method: 'GET',
  url: URL,
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetch = async (url) => {
  const { data } = await axios.get(`${URL}/${url}`, options);
  return data;
};
