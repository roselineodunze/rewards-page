import { UserPlus, Gift, Calendar } from "lucide-react";
import React from "react";

const FeaturedCard = () => {
  return (
    <div className="h-full">
      <div className="h-40 bg-gradient-to-br from-purple-700 to-blue-300 rounded-t-2xl text-white px-6 pt-6">
        <div className="bg-purple-500 opacity-[3px] h-7 w-[90px] rounded-2xl flex justify-center items-center">
          <p>Featured</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">Top Tool Spotlight Reclaim</p>
          <div>
            <div className="h-20 w-20 rounded-full bg-purple-400 flex items-center justify-center">
              <div>
                <div className="flex ">
                  <div className="w-5 h-5 bg-pink-400"></div>
                  <div className="w-5 h-5 bg-purple-900 rounded-full"></div>
                </div>
                <div className="flex ">
                  <div className="w-5 h-5 bg-blue-100 rounded-full"></div>

                  <div
                    className="w-0 h-0
  border-l-[10px] border-l-transparent
  border-r-[10px] border-r-transparent
  border-b-[20px] border-b-pink-300"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 mt-4">
        <div className="flex gap-4 justify-between">
          <div className="h-10 w-10 pt-1">
            <Calendar className="text-purple-700"/>
          </div>
          <div className="">
            <h4 className="lg:text-lg font-semibold">
              Automate and Optimize Your Schedule
            </h4>
            <p className="text-gray-600">
              Reclaim.ai is an AI-powered calendar assistant that automatically
              schedules your tasks, meetings, and breaks to boost productivity.
              Free to try — earn Flowva Points when you sign up!
            </p>
          </div>
        </div>
        <div className="flex items-center mt-7 justify-between border-t-2 pt-3">
          <button className="h-12 rounded-[30px] flex items-center gap-2 px-2 justify-center text-lg text-white bg-purple-700 font-semibold">
            <UserPlus size={24} />
            <p>Sign Up</p>
          </button>
          <button className="h-12 rounded-[30px] flex items-center gap-2 px-3 justify-center text-lg text-white bg-gradient-to-tr from-purple-700 to-pink-500 font-semibold">
            <Gift size={24} />
            <p>Claim 50 pts</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
