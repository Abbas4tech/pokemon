import React from "react";
import { BasePokeData } from "../model/pokemon-model";

const Card = (cardData: BasePokeData) => {
  return (
    <>
      <div className="rounded-2xl md:p-6 p-4 w-full bg-base-300 shadow-xl">
        <div className="flex justify-between items-center">
          <h2 className=" text-md md:text-lg font-bold">
            {cardData.name.toUpperCase()}
          </h2>
          <div className="">
            <button className="btn btn-primary">View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
