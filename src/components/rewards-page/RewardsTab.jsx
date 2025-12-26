import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EarnPointsTab from "./EarnPointsTab";
import ReedeemRewardsTab from "./ReedeemRewardsTab";

const RewardsTab = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="earn-points">
        <TabsList className={"relative !bg-transparent mb-7 px-0"}>
          <TabsTrigger
            value="earn-points"
            className={
              "!rounded-none !rounded-t-xl text-lg mb-4 mr-4 hover:bg-purple-50 h-14 flex items-center gap-3 border-b-[3px] border-transparent data-[state=active]:text-purple-700 data-[state=active]:bg-purple-50 data-[state=active]:border-purple-700"
            }
          >
            <p className="text-xl"> Earn Points</p>
          </TabsTrigger>
          <TabsTrigger
            value="redeem-rewards"
            className={
              "!rounded-none !rounded-t-xl text-lg mb-4 mr-4 hover:bg-purple-50 h-14 flex items-center gap-3 border-b-[3px] border-transparent data-[state=active]:text-purple-700 data-[state=active]:bg-purple-50 data-[state=active]:border-purple-700"
            }
          >
            <p className="text-xl"> Redeem Rewards</p>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="earn-points">
          <EarnPointsTab />
        </TabsContent>
        <TabsContent value="redeem-rewards">
          <ReedeemRewardsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RewardsTab;
