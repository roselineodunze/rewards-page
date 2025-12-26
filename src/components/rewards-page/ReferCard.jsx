import React from "react";
import { FaRegStar } from "react-icons/fa";

const ReferCard = () => {
  return (
    <div className="flex flex-col h-full  ">
      <div className="flex gap-4 h-20 border-b-2  px-6 items-center">
        <div className="h-10 w-10 rounded-md bg-purple-100 flex justify-center items-center">
          <FaRegStar className="text-purple-700" size={"30"} />
        </div>
        <h4 className="text-md lg:text-lg font-semibold">Refer and win 10,000 points!</h4>
      </div>
      <div className="flex-1 bg-blue-50 p-6 text-md font-medium rounded-2xl">
        <p>
          Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of 
          <span className="text-purple-700"> 10,000 points.</span>
           Friends must complete onboarding to qualify.
        </p>
      </div>
    </div>
  );
};

export default ReferCard;
