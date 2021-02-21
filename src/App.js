import HomePage from "./conponents/HomePage";
import Header from "./conponents/Header";
import Footer from "./conponents/Footer";
import Search from "./conponents/Search";
import Board from "./conponents/Board";
import Loading from "./conponents/Loading";
import UseFetch from "./useHooks/UseFetch";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    UseFetch("taiwan", setData);
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
