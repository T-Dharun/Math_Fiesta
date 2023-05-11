import React from "react";
import img1 from "./../assets/posterf.png";
import "./offer.css" ; 

const Poster = () => {
  return (
    <div className="pt-28 relative ">
      <img src={img1} alt="poster" className="w-9/12 mx-auto" />
      <div className=" absolute top-16 right-24 sm:right-64 uppercase font-bold text-center " >
        <span className=" rating sun sunshine w-20 h-20 sm:w-28 sm:h-28"></span>
        <span className="sun pt-5 sm:pt-7 text-sm sm:text-xl w-20 h-20 sm:w-28 sm:h-28"> exciting prizes </span>
      </div>
    </div>
  );
};

export default Poster;
