import React from "react";
import "./NavBar.css";
import logo from "./logo.png";

const NavBar = () => {
  console.log("NavBar component rendered");
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-links">
          <li>
            <a href="/HomePage">Home</a>
          </li>
          <li>
            <a href="/AboutPage">About</a>
          </li>
          <li>
            <a href="/EventsPage">Events</a>
          </li>
          <li>
            <a href="/PartnersPage">Partners</a>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <a href="/" className="logo">
          <img src={logo} alt="The logo of the TechnoVanza event"></img>
        </a>
      </div>
      <div className="navbar-right">
        <a href="/account" className="user">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
