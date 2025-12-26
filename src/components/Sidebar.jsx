import React from "react";
import flowvaLogo from "../assets/flowva_logo.png";
import SidebarLinks from "./sidebar/SidebarLinks";
import { sidebarLinks } from "@/constants";
import ProfileLink from "./sidebar/ProfileLink";
import { X } from "lucide-react";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="relative h-full flex flex-col justify-between px-5 border-r-2 border-gray-200">
      {showSidebar && (
        <div className="absolute top-5 right-2 cursor-pointer" onClick={() => setShowSidebar(false)}>
          <X />
        </div>
      )}

      <div>
        <img src={flowvaLogo} width={200} className="mb-9 mt-5" />
        <div className="flex flex-col gap-3">
          {sidebarLinks.map((item, i) => (
            <SidebarLinks key={i} item={item} />
          ))}
        </div>
      </div>
      <div className="">
        <ProfileLink />
      </div>
    </div>
  );
};

export default Sidebar;
