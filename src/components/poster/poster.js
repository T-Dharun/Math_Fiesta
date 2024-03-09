import React from "react";
import './poster.css';
import poster from '../../assets/posterf.jpg';
import cash from '../../assets/Red and Black Animated Spiky Pattern Big Sale Instagram Post (1).gif'
function Poster(){
    return(
        <div className="poster-container">
            <img src={cash} alt="cashprizes" className="prize"/>
            <img src={poster} alt="poster" className="poster-image"></img>
        </div>
    );
}
export default Poster;