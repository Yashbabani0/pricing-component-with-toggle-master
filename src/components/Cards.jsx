import React from "react";

function Cards(props) {
  return (
    <div className="absolute flex items-center justify-center w-full">
      <div className="w-80 h-[25em] flex flex-col z-10 rounded-2xl card-back-color">
        <h5 className="font-bold tracking-wider mt-8 mb-4 font-white-900">
          {props.heading}
        </h5>
        <h4 className=" text-5xl font-bold">{props.price}</h4>
        <div className="mt-6 mx-8">
          <p className="border-t-[1px] pt-2 pb-2 border-b-[1px]">
            {props.storage}
          </p>
          <p className="border-b-[1px] py-2">{props.user}</p>
          <p className="border-b-[1px] py-2">{props.send}</p>
        </div>

        <button className=" border m-8 p-3 rounded-xl bg-white hover:bg-transparent border delay-[420ms] transition ease-in-out">
          Learn More
        </button>
      </div>
    </div>
  );
}
export default Cards;
