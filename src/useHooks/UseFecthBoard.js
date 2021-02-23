import { APIKEY } from "./APIKEY";
function UseFecthBoard(setData) {
  fetch("https://covid-193.p.rapidapi.com/statistics", {
    method: "GET",
    headers: {
      "x-rapidapi-key": APIKEY,
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => setData(data.response))
    .catch((err) => {
      console.error(err);
    });
}
export default UseFecthBoard;
