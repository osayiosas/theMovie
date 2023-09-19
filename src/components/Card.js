import React from "react";
import image from '../image/poster.jpg'

const Card = () => {
  return (
    <div>
      <div className="movie">
        <img
          src={image} alt="poster"
         width={250}></img>

        <div className="movie-details">
          <div className="box">
            <h4 className="title">Movie Title</h4>
            <p className="rating" >9.7</p>
          </div>

          <div className="overview">
            <h1>Overview</h1>
            mathe this a beatiful movies to watch out for.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
