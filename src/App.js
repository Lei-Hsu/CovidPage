import HomePage from "./conponents/HomePage";
import Header from "./conponents/Header";
import Footer from "./conponents/Footer";
import Search from "./conponents/Search";
import Board from "./conponents/Board";
import Loading from "./conponents/Loading";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://covid-193.p.rapidapi.com/statistics?country=taiwan", {
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
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <>
          <div className="App">
            <Header />
            <Route exact path="/">
              {data ? <HomePage data={data} /> : <Loading />}
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/board">
              <Board />
            </Route>
          </div>
          <Footer />
        </>
      </Switch>
    </BrowserRouter>
  );
}
