import React from "react";
import img from "./../assets/logo.png";
import img1 from "./../assets/club_logo.jpg";
import { Link } from "react-router-dom";
const DashBoard = () => {
  return (
    <div>
    <div class="bg-[url('./assets/bg.gif')] h-screen w-screen flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat">
      <img className=" w-96 h-48 " src={img} alt="logo" />
      <div className=" text-2xl text-pink-200 font-bold text-center ">
        <p>From</p>
        <p>" SRINIVASA RAMANUJAN MATHEMATICS CLUB "</p>
        <br></br>
        <div>
          <img src={img1} alt="mc logo" className=" mx-auto h-20 w-20 "/>
          <div className="mt-8">
        <a
                href=""
                className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center   bg-clip bg-gradient-to-r from-pink-400 to-cyan-600 text-white rounded-lg relative  "
              >
                <Link to="/events">Register For the Events</Link>
                <svg
                  // aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
        </div>
        </div>
       
      </div>
    </div>
     </div>
  );
};

export default DashBoard;
