import React from "react";
import "./poster.css";
import poster from "../../assets/posterf.png";
import cash from "../../assets/Red.gif";
function Poster() {
  return (
    <>
      <div className="poster-container">
        <img src={cash} alt="cashprizes" className="prize" />
        <img src={poster} alt="poster" className="poster-image"></img>
      </div>
      <marquee>
        <p className="marquee-text">
          Pay Rs.150 for general registration and enjoy access to all exciting
          events.
        </p>
      </marquee>
    </>
  );
}
export default Poster;
