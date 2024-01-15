import React from "react";

const Navbar = ({ brand, episode }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand " href="/">
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;