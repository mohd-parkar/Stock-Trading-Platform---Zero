import React from "react";
import {Link} from 'react-router-dom';
import '../index.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
              <Link to={"/"} style={{textDecoration: "none"}} >
              <p style={{color: "grey"}} className="hovering">Dashboard</p>
              </Link>
          </li>
          <li>
             <Link to={"/orders"} style={{textDecoration: "none"}}>
              <p style={{color: "grey"}}>Orders</p>
              </Link>
          </li>
          <li>
            <Link to={"/holdings"} style={{textDecoration: "none"}}>
              <p style={{color: "grey"}}>Holdings</p>
              </Link>
          </li>
          <li>
             <Link to={"/positions"} style={{textDecoration: "none"}}>
              <p style={{color: "grey"}}>Positions</p>
              </Link>
          </li>
          <li>
             <Link to={"/funds"} style={{textDecoration: "none"}}>
              <p style={{color: "grey"}}>Funds</p>
              </Link>
          </li>
          <li>
             <Link to={"/apps"} style={{textDecoration: "none"}}>
              <p style={{color: "grey"}}>Apps</p>
              </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
