import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";

const ShareCard = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-4 h-20 border-b-2 px-6 items-center">
        <div className="h-10 w-10 rounded-md bg-purple-100 flex justify-center items-center">
          <IoShareSocialOutline className="text-purple-700" size={"30"} />
        </div>
        <div>
          <h4 className="text-md lg:text-lg font-semibold">Share Your Stack</h4>
          <p className="text-gray-500 text-sm">Earn +25 pts</p>
        </div>
      </div>
      <div className="flex-1 bg-blue-50 p-6 text-md font-medium rounded-2xl">
        <div className="flex items-center justify-between">
          <p>Share your tool stack</p>
          <div className="h-10 w-28 rounded-xl bg-purple-200 flex gap-3 items-center justify-center text-purple-700">
            <IoShareSocialOutline className="" size={"30"} />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareCard;
