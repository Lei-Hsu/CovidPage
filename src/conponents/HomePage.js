import React from "react";

export default function HomePage({ country, population, cases, deaths, day }) {
  return (
    <>
      {country && (
        <div className="container">
          <div className="countryName">
            <h1>{country}</h1>
          </div>
          <div className="DetailTitle">
            <div>
              <h2>人口</h2>
              <p>{population}</p>
            </div>
            <div>
              <h2>確診人數</h2>
              <p>{cases.total}</p>
            </div>
            <div>
              <h2>死亡人數</h2>
              <p>{deaths.total}</p>
            </div>
            <div>
              <h2>今日增加</h2>
              <p>{cases.new}</p>
            </div>
            <div>
              <h2>康復人數</h2>
              <p>{cases.recovered}</p>
            </div>
            <div>
              <h2>搜尋日期</h2>
              <p>{day}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
