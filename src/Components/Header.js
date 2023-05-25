import React from "react";
import './Style.css';

function Header({ title }) {
    return (
      <div className="header">
        <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
        <h1>{title}</h1>
        <h1>=====================</h1>
      </div>
    );
  }

  export default Header