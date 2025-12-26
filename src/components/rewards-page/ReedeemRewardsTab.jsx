import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LockedCards from "./LockedCards";
import { lockedCards } from "@/constants";

const ReedeemRewardsTab = () => {
  return (
    <div>
      <h3 className=" text-xl lg:text-3xl font-bold border-l-[6px] border-l-purple-700 pl-4 mb-8">
        Redeem Your Points
      </h3>
      <Tabs defaultValue="all-rewards" className="relative">
        <div className="absolute left-0 top-0 bottom-0 block lg:hidden w-8 h-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="overflow-x-auto mb-10 scrollbar-hide snap-x snap-mandatory">
          <TabsList className={"relative !bg-transparent mb-10"}>
            <TabsTrigger
              value="all-rewards"
              className={
                "!rounded-none !rounded-t-xl text-lg mb-4 mr-4 hover:bg-purple-50 h-14 flex items-center gap-3 border-b-[3px] border-transparent data-[state=active]:text-purple-700 data-[state=active]:bg-purple-50 data-[state=active]:border-purple-700"
              }
            >
              <p className="text-xl">All Rewards</p>
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-xl">
                <p>8</p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="unlocked"
              className={
                "!rounded-none !rounded-t-xl text-lg mb-4 mr-4 hover:bg-purple-50 h-14 flex items-center gap-3 border-b-[3px] border-transparent data-[state=active]:text-purple-700 data-[state=active]:bg-purple-50 data-[state=active]:border-purple-700"
              }
            >
              <p className="text-xl">Unlocked</p>
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-xl">
                <p>0</p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="locked"
              className={
                "!rounded-none !rounded-t-xl text-lg mb-4 mr-4 hover:bg-purple-50 h-14 flex items-center gap-3 border-b-[3px] border-transparent data-[state=active]:text-purple-700 data-[state=active]:bg-purple-50 data-[state=active]:border-purple-700"
              }
            >
              <p className="text-xl">Locked</p>
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-xl">
                <p>0</p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="coming-soon"
              className={
                "!rounded-none !rounded-t-xl text-lg mb-4 mr-4 hover:bg-purple-50 h-14 flex items-center gap-3 border-b-[3px] border-transparent data-[state=active]:text-purple-700 data-[state=active]:bg-purple-50 data-[state=active]:border-purple-700"
              }
            >
              <p className="text-xl">Coming Soon</p>
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-xl">
                <p>7</p>
              </div>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="all-rewards"
          className={"grid grid-cols-1 md:grid-cols-2 gap-8"}
        >
          {lockedCards.map((item, i) => (
            <div key={i} className="border border-gray-300 h-[350px] rounded-xl px-8 py-7">
              <LockedCards item={item} />
            </div>
          ))}
        </TabsContent>
        <TabsContent
          value="unlocked"
          className={"grid grid-cols-1 md:grid-cols-2 gap-8"}
        ></TabsContent>
        <TabsContent
          value="locked"
          className={"grid grid-cols-1 md:grid-cols-2 gap-8"}
        ></TabsContent>
        <TabsContent
          value="coming-soon"
          className={"grid grid-cols-1 md:grid-cols-2 gap-8"}
        >
          {lockedCards.map((item, i) => (
            <div key={i} className="border border-gray-300 h-[350px] rounded-xl px-8 py-7">
              <LockedCards item={item} />
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReedeemRewardsTab;
