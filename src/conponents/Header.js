import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <h1>COVID</h1>
        </Link>
      </div>
      <div className="nav">
        <Link to="/board">排行</Link>
        <Link to="/search">搜尋</Link>
      </div>
    </div>
  );
}
