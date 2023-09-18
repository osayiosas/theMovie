import React from "react";

const Card = () => {
  return (
    <div>
      <div className="movie">
        <img
          src="../image/poster.jpg" alt="poster"
        ></img>

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
