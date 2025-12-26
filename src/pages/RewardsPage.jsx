import RewardsTab from "@/components/rewards-page/rewardsTab";
import React from "react";

const RewardsPage = () => {
  return (
    <div className="">
      <p className="text-xl mb-10">
        Earn points, unlock rewards, and celebrate your progress!
      </p>
      <section>
        <RewardsTab />
      </section>
    </div>
  );
};

export default RewardsPage;
