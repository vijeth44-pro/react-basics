import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <p className="logo">YESHU</p>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
