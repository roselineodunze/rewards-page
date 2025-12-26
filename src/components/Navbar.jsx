import useLogout from "@/hooks/useLogout";
import { LogOut } from "lucide-react";
import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { LuMenu } from "react-icons/lu";

const Navbar = ({ setShowSidebar }) => {
  const { logOut } = useLogout();
  return (
    <nav className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-4 text-2xl lg:text-3xl">
        <LuMenu
          className="xl:hidden cursor-pointer"
          onClick={() => setShowSidebar(true)}
        />
        <h1 className="">Rewards Hub</h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="h-12 w-12 bg-gray-200 rounded-full flex justify-center items-center relative hover:bg-gray-300 cursor-pointer hover:text-purple-700">
          <div className="absolute top-[-4px] right-1 bg-red-600 text-white hover:text-white text-xs h-4 w-4 rounded-full flex justify-center items-center">
            3
          </div>
          <IoMdNotifications size={20} className="" />
        </div>
        <LogOut
          size={24}
          className="text-red-500 cursor-pointer hover:text-gray-700"
          onClick={logOut}
        />
      </div>
    </nav>
  );
};

export default Navbar;
