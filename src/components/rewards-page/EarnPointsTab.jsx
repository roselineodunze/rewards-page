import React from "react";
import PointsBalanceCard from "./PointsBalanceCard";
import DailyStreakCard from "./DailyStreakCard";
import FeaturedCard from "./FeaturedCard";
import ReferCard from "./ReferCard";
import ShareCard from "./ShareCard";
import { FiUsers } from "react-icons/fi";
import { MdOutlineContentCopy } from "react-icons/md";
import whatsapp from "../../assets/social.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import { Item } from "../ui/item";
import useAuthStore from "@/stores/authStore";


const EarnPointsTab = () => {
  const { user } = useAuthStore();
  if(!user) return

  const REFERRAL_LINK = "https://flowvahub.com/signup/?ref="
  const email = user.email.split('')
  let name = ""

  for(let i = 0; i < 5 ; i++){
    name = name + email[i]
  }

  for(let i = 0; i < 4; i++){
    const randomNumber = Math.floor(Math.random() * 10);
    name = name + `${randomNumber}`
  }

  const referralName = REFERRAL_LINK + name

  const socialIcons = [facebook, twitter, linkedin, whatsapp];
  return (
    <div>
      <h3 className="text-xl lg:text-3xl font-bold border-l-[6px] border-l-purple-700 pl-4 mb-6">
        Your Rewards Journey
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-7">
        <div className="h-[400px] lg:h-[500px] rounded-2xl shadow-xl">
          <PointsBalanceCard />
        </div>
        <div className="h-[420px] lg:h-[500px] rounded-2xl shadow-xl">
          <DailyStreakCard />
        </div>
        <div className="h-auto pb-3 lg:h-[500px] rounded-2xl shadow-xl">
          <FeaturedCard />
        </div>
      </div>
      <h3 className=" text-xl lg:text-3xl  font-bold border-l-[6px] border-l-purple-700 pl-4 mb-7">
        Earn More Points
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:w-[65%] mb-7">
        <div className="h-auto lg:h-[250px] rounded-2xl border border-gray-200 hover:border-purple-700">
          <ReferCard />
        </div>
        <div className="h-auto lg:h-[250px] rounded-2xl border border-gray-200 hover:border-purple-700">
          <ShareCard />
        </div>
      </div>
      <h3 className=" text-xl lg:text-3xl  font-bold border-l-[6px] border-l-purple-700 pl-4 mb-7">
        Refer & Earn
      </h3>
      <div className="h-auto shadow-lg rounded-2xl mb-2 pb-2">
        <div className="flex items-center px-6 bg-blue-50 gap-5 h-28 rounded-t-2xl">
          <FiUsers className="text-purple-700" size={"30"} />
          <div className="">
            <p className="text-gray-800 font-semibold text-2xl">
              Share Your Link
            </p>
            <p className="text-gray-600">
              Invite friends and earn 25 points when they join!
            </p>
          </div>
        </div>
        <div className="px-6">
          <div className="flex items-center my-10">
            <div className="text-center flex-1">
              <p className="text-3xl text-purple-700 font-bold">0</p>
              <p className="text-lg">Referrals</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-3xl text-purple-700 font-bold">0</p>
              <p className="text-lg">Points Earned</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-5 h-32 rounded-2xl bg-purple-50 justify-center">
            <p className="text-gray-600 text-lg">
              Your personal referral link:
            </p>
            <div className="border-2 h-12 text-lg flex items-center px-3 justify-between rounded-md">
              <p className="text-black truncate">
                {referralName}
              </p>
              <div className="h-8 w-8 lg:h-12 lg:w-12 flex items-center justify-center">
                <MdOutlineContentCopy
                  className="text-purple-700 cursor-pointer"
                  size={"30"}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 my-7">
            {socialIcons.map((item, i) => (
              <img key={i} src={item} height={36} width={36} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnPointsTab;
