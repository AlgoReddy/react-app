import React from "react";

const card = (props) => {
  return (
    <div className="card">
      <img
        src={props.img}
        alt="3d sculputure of alexander"
      />
      <h1> {props.user} <br>
      </br> <br />{props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
};

export default card;
