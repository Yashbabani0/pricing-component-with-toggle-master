import React from "react";

function Cards(props) {
  return (
    <div className="">
      <h5>{props.heading}</h5>
      <h4>{props.price}</h4>
      <b>{props.storage}</b>
      <b>{props.users}</b>
      <b>{props.send}</b>
    </div>
  );
}

export default Cards;
