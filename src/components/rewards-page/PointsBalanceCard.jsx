import React from "react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { IoRibbon } from "react-icons/io5";
import coin from "../../assets/coin.png"

const PointsBalanceCard = () => {
  return (
    <div className="h-full">
      <div className="h-24 bg-blue-50 flex items-center rounded-t-2xl pl-6">
        <Item size="md" asChild>
          <a href="#" className="flex gap-3">
            <ItemMedia>
              <IoRibbon className="text-purple-700" size={30} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className={"text-xl lg:text-2xl"}>Points Balance</ItemTitle>
            </ItemContent>
          </a>
        </Item>
      </div>
      <div className="px-6 mt-14">
        <div className="flex justify-between w-[90%] mb-10">
            <h4 className="text-5xl font-bold text-purple-700">0</h4>
            <img src={coin} height={50} width={50}/>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-md lg:text-lg">
                <p>Progress to $5 Gift Card</p>
                <p>0/5000</p>
            </div>
            <div className="bg-gray-200 h-3 rounded-lg"></div>
            <p className="text-gray-500 text-sm">🚀 Just getting started — keep earning points!</p>
        </div>
      </div>
    </div>
  );
};

export default PointsBalanceCard;
