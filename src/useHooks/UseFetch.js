import { APIKEY } from "./APIKEY.js";
const UseFetch = (location, setData) => {
  fetch("https://covid-193.p.rapidapi.com/statistics?country=" + location, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-key": APIKEY,
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((data) => setData(data.response[0]))
    .catch((err) => {
      console.error(err);
    });
};

export default UseFetch;
