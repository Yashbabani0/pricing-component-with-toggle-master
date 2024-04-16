import React from "react";

function Cards(props) {
  return (
    <div className=" bg-purple-500 w-80 h-[25em] flex flex-col z-10">
      <h5 className="font-bold tracking-wider mt-8 mb-4 font-white-900">
        Testing
      </h5>
      <h4 className=" text-4xl font-bold">10 $</h4>
      <p>1tb</p>
      <p>2 user</p>
      <p>send up to 3gb</p>
      <button className=" border m-8 p-3 rounded-xl bg-white hover:bg-transparent">
        Learn More
      </button>
      {/* <h5>{props.heading}</h5>
      <h4>{props.price}</h4>
      <b>{props.storage}</b>
      <b>{props.users}</b>
      <b>{props.send}</b> */}
    </div>
  );
}
{
  /* <Cards heading="Basic" price="10$" storage="1" users="10" send="10" /> */
}
export default Cards;
