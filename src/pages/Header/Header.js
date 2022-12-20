import React, { useState } from "react";
import "./Header.css"
import logo from "../../assets/logo3.png"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBg = () => {
    if(window.scrollY >= 20) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBg)

  const menuItems = (
    <>
      <li>
        <a href="/#home">Home</a>
      </li>
      <li>
        <a href="/#about">About</a>
      </li>
      <li>
        <a href="/#projects">Projects</a>
      </li>
      <li>
        <a href="/#blogs">Blogs</a>
      </li>
      <li>
        <a href="/#contact">Contact</a>
      </li>
    </>
  );

  return (
    <div>
      <nav className={navbar ? 'navbar active fixed top-0 z-10 h-6 w-screen' : 'navbar fixed top-0 z-10 h-6 w-screen'}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content bg-base-200 mt-3 p-2 shadow rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <a href="/#home">
            <img src={logo} className="max-w-[14rem]" alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
