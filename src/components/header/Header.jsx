import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <Link to={"/"}>QUIZ TIME 😎</Link>
      </nav>
    </header>
  );
};

export default Header;
