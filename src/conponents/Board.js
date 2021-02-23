import React, { useEffect, useState } from "react";
import UseFecthBoard from "../useHooks/UseFecthBoard";
import CountryData from "./CountryData";
import Loading from "./Loading";

function Board() {
  const [wholeData, setWholeData] = useState("");

  useEffect(() => {
    UseFecthBoard(setWholeData);
  }, []);
  return (
    <div className="container">
      {wholeData ? <CountryData wholeData={wholeData} /> : <Loading />}
    </div>
  );
}

export default Board;
