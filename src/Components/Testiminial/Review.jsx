import React from "react";

function Review(props) {
  return (
    <div className="col-3">
      <i className="fa fa-quote-left"></i>
      <p>
        {props.para}
      </p>
      <div className="rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className={props.fourth}></i>
        <i className={props.fifth}></i>
      </div>
      <img src={props.img} alt="User" />
      <h3>{props.name}</h3>
    </div>
  );
}

export default Review;
