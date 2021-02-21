const UseFetch = (location, setData) => {
  fetch("https://covid-193.p.rapidapi.com/statistics?country=" + location, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-key": "fce351f4d4msh97551c1d5bbc92dp104d0ejsn1c2fe1d64fb4",
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
