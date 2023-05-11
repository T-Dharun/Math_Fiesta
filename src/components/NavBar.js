import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="absolute w-screen shadow-lg bg-white-900 z-50 pt-2 sm:p-0">
      <div className="flex justify-evenly  overflow-hidden">
        <div className="text-white flex justify-between items-center w-4/5 max-w-[1240px] ">
          <Link to="/">
            <h1 className="w-full text-3xl font-bold "> Math Fiesta </h1>
          </Link>
          <ul className="hidden md:flex">
            <li className="p-4">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4">
              <Link to="/events">Events</Link>
            </li>
            <li className="p-4">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={
              nav
                ? "z-10 fixed left-0 top-0 h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <h1 className="w-full text-3xl font-bold m-4">
              {" "}
              Math Fiesta 2K23{" "}
            </h1>
            <ul className="uppercase p-4">
              <li className="p-4 border-b border-gray-600">
                <Link to="/">Home</Link>
              </li>
              <li className="p-4 border-b border-gray-600">
                <Link to="/events">Event</Link>
              </li>
              <li className="p-4 border-b border-gray-600">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <img
          className="mr-5 hidden sm:block "
          alt="club logo"
          style={{ width: "calc(100%*0.09)" }}
          src={logo}
        ></img>
      </div>
    </header>
  );
};

export default NavBar;
