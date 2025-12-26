import React from "react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { FaRegCalendar } from "react-icons/fa6";
import { FiZap } from "react-icons/fi";

const DailyStreakCard = () => {
  const days = [ "M", "T", "W", "T", "F", "S", "S"];
  const todayIndex = (new Date().getDay() + 6) % 7;

  return (
    <div className="h-full">
      <div className="h-24 bg-blue-50 flex items-center rounded-t-2xl pl-6">
        <Item size="md" asChild>
          <a href="#" className="flex gap-3">
            <ItemMedia>
              <FaRegCalendar className="text-blue-300" size={30} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className={"text-xl lg:text-2xl"}>Daily Streak</ItemTitle>
            </ItemContent>
          </a>
        </Item>
      </div>
      <div className="px-6 mt-14">
        <h4 className="text-5xl font-bold text-purple-700">0 day</h4>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center justify-center gap-3 lg:gap-0 lg:justify-between">
            {days.map((day, index) => {
              const isToday = index === todayIndex;

              return (
                <div
                  key={index}
                  className={` h-8 w-8 md:h-12 md:w-12
              lg:h-8 lg:w-8 rounded-full flex items-center justify-center text-sm font-medium bg-gray-200
              ${isToday ? "border-2 border-purple-600" : ""}
            `}
                >
                  {day[0]}
                </div>
              );
            })}
          </div>
          <p className="text-md lg:text-lg text-center lg:text-left">Check in daily to to earn +5 points</p>
          <button className="h-14 rounded-[30px] flex items-center gap-3 justify-center text-lg text-white bg-purple-700 font-semibold">
            <FiZap size={24} />
            <p>Claim Today's Points</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyStreakCard;
