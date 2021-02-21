import React, { useState } from "react";
import UseFetch from "../useHooks/UseFetch";
import { APIKEY } from "../useHooks/APIKEY.js";

function Search() {
  const [singlecountry, setSinglecountry] = useState("");
  const [countryInfor, setCountryInfor] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSinglecountry(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    UseFetch(singlecountry, setCountryInfor);
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
      {countryInfor && (
        <div className="DetailTitle">
          <div>
            <h2>人口</h2>
            <p>{countryInfor.population}</p>
          </div>
          <div>
            <h2>確診人數</h2>
            <p>{countryInfor.cases.total}</p>
          </div>
          <div>
            <h2>死亡人數</h2>
            <p>{countryInfor.deaths.total}</p>
          </div>
          <div>
            <h2>今日增加</h2>
            <p>{countryInfor.cases.new}</p>
          </div>
          <div>
            <h2>康復人數</h2>
            <p>{countryInfor.cases.recovered}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
