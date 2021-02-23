import React from "react";

function SearchBox({ countryInfor }) {
  return (
    <>
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
          <div>
            <h2>搜尋日期</h2>
            <p>{countryInfor.day}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBox;
