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
  const [taiwanData, setTaiwanData] = useState("");
  const [pending, setPending] = useState(false);
  useEffect(() => {
    setPending(true);
    UseFetch("taiwan", setTaiwanData, pending, setPending);
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <>
          <div className="App">
            <Header />
            <Route exact path="/">
              {pending ? <Loading /> : <HomePage {...taiwanData} />}
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
