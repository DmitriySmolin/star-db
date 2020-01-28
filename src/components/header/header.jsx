import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#f">Star DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#f">People</a>
        </li>
        <li>
          <a href="#f">Planets</a>
        </li>
        <li>
          <a href="#f">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
