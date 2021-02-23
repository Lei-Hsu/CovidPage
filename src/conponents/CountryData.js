import React from "react";
import Loading from "./Loading";

function CountryData({ wholeData }) {
  //全球資料
  let global = wholeData
    .filter((data) => data.continent !== data.country)
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  //亞洲資料
  let asia = wholeData
    .filter(
      (data) => data.continent === "Asia" && data.continent !== data.country
    )
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  console.log(wholeData);
  //歐洲資料
  let europe = wholeData
    .filter(
      (data) => data.continent === "Europe" && data.continent !== data.country
    )
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  //美洲資料
  let nAmerica = wholeData.filter((data) => data.continent === "North-America");
  let sAmerica = wholeData.filter((data) => data.continent === "South-America");
  Array.prototype.push.apply(nAmerica, sAmerica);
  let americaTatol = nAmerica
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  //非洲資料
  let africa = wholeData
    .filter(
      (data) => data.continent === "Africa" && data.continent !== data.country
    )
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  //大洋洲資料
  let oceania = wholeData
    .filter(
      (data) => data.continent === "Oceania" && data.continent !== data.country
    )
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  return (
    <>
      <div className="globalData">
        <h1>全球排行</h1>
        {global.map((items, i) => (
          <div key={i}>
            <h2>
              {i + 1}. {items.country}
            </h2>
            <p className="colorRed">
              今日新增：
              {items.cases.new}
            </p>
            <p>總確診人數：{items.cases.total}</p>
          </div>
        ))}
      </div>
      <div className="asiaData">
        <h1>亞洲排行</h1>
        {asia.map((items, i) => (
          <div key={i}>
            <h2>
              {i + 1}. {items.country}
            </h2>
            <p className="colorRed">
              今日新增：
              {items.cases.new}
            </p>
            <p>總確診人數：{items.cases.total}</p>
          </div>
        ))}
      </div>
      <div className="europeData">
        <h1>歐洲排行</h1>
        {europe.map((items, i) => (
          <div key={i}>
            <h2>
              {i + 1}. {items.country}
            </h2>
            <p className="colorRed">
              今日新增：
              {items.cases.new}
            </p>
            <p>總確診人數：{items.cases.total}</p>
          </div>
        ))}
      </div>
      <div className="americaData">
        <h1>美洲排行</h1>
        {americaTatol.map((items, i) => (
          <div key={i}>
            <h2>
              {i + 1}. {items.country}
            </h2>
            <p className="colorRed">
              今日新增：
              {items.cases.new}
            </p>
            <p>總確診人數：{items.cases.total}</p>
          </div>
        ))}
      </div>
      <div className="africaData">
        <h1>非洲排行</h1>
        {africa.map((items, i) => (
          <div key={i}>
            <h2>
              {i + 1}. {items.country}
            </h2>
            <p className="colorRed">
              今日新增：
              {items.cases.new}
            </p>
            <p>總確診人數：{items.cases.total}</p>
          </div>
        ))}
      </div>
      <div className="oceaniaData">
        <h1>大洋洲排行</h1>
        {oceania.map((items, i) => (
          <div key={i}>
            <h2>
              {i + 1}. {items.country}
            </h2>
            <p className="colorRed">
              今日新增：
              {items.cases.new}
            </p>
            <p>總確診人數：{items.cases.total}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CountryData;
