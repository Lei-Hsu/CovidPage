import React, { useState } from "react";
import UseFetch from "../useHooks/UseFetch";
import SearchBox from "./SearchBox";
import Loading from "./Loading";

function Search() {
  const [singlecountry, setSinglecountry] = useState("");
  const [countryInfor, setCountryInfor] = useState("");
  const [pending, setPending] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setSinglecountry(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setPending(true);
    UseFetch(singlecountry, setCountryInfor, pending, setPending);
  };
  return (
    <div className="container">
      <div className="searchBox">
        <input
          placeholder="請輸入國家英文名..."
          onChange={handleChange}
        ></input>
        <button onClick={handleSearch}>搜尋</button>
      </div>
      {countryInfor ? (
        <div className="countryName">
          <h1>{countryInfor.country}</h1>
        </div>
      ) : (
        <div className="countryName">
          <span style={{ color: "red" }}>請輸入正確國名（英文）</span>
        </div>
      )}
      {pending ? <Loading /> : <SearchBox countryInfor={countryInfor} />}
    </div>
  );
}

export default Search;
