import * as icons from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavBarData } from "./NavBarData";
import "./navbar.css";
import { IconContext } from "react-icons/lib";
import { useState } from "react";

const NavBar = () => {
  const [sideBarDrawer, setComponents] = useState(false);
  const displaySideBar = () => setComponents(!sideBarDrawer);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <icons.AiOutlineMenuUnfold onClick={displaySideBar} />
          </Link>
        </div>
        <nav className={sideBarDrawer ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={displaySideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <icons.AiOutlineClose />
              </Link>
            </li>

            {NavBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.redirect_path}>
                    {item.icon}
                    <span>{item.tab_name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
