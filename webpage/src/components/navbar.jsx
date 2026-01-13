import React from "react";
import "./navbar.css";

export default function navbar() {
  return (
    <div className="container">
      <div className="cont-components">
        <h1>meesho</h1>
        <input
          type="search"
          placeholder="Try Saree,Kurti or Search by product Code"
        ></input>
        <h1>Become a supplier</h1>
        <h1>Investor Relations</h1>
      </div>
    </div>
  );
}
