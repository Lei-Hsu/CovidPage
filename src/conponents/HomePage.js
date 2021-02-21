import React from "react";

export default function HomePage({ data }) {
  return (
    <>
      {
        <div className="container">
          <div className="countryName">
            <h1>{data.country}</h1>
          </div>
          <div className="DetailTitle">
            <div>
              <h2>人口</h2>
              <p>{data.population}</p>
            </div>
            <div>
              <h2>確診人數</h2>
              <p>{data.cases.total}</p>
            </div>
            <div>
              <h2>死亡人數</h2>
              <p>{data.deaths.total}</p>
            </div>
            <div>
              <h2>今日增加</h2>
              <p>{data.cases.new}</p>
            </div>
            <div>
              <h2>康復人數</h2>
              <p>{data.cases.recovered}</p>
            </div>
          </div>
        </div>
      }
    </>
  );
}
