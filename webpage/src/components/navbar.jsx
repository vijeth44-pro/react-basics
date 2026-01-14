import React from "react";
import "./navbar.css";

export default function navbar() {
  return (
    <div className="navbar">
      <img src="" alt="" className="logo"/>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="search" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
