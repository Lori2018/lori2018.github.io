import "../styles/NavBarStyles.css";
import React from "react";

function NavBar() {
  let navItems = ["PROJECTS", "CONTACT"];
  navItems.reverse();
  return (
    <>
      <div className="navbar">
        <div className="name">LB</div>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={"item" + (index === 0 ? " last-item" : "")}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default NavBar;
