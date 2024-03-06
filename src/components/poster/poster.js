import React from "react";
import './poster.css';
import poster from '../../assets/posterf.jpg';
function Poster(){
    return(
        <div className="poster-container">
            <img src={poster} alt="poster" className="poster-image"/>
        </div>
    );
}
export default Poster;