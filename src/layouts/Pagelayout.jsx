import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "@/components/Navbar";
import { useLocation } from "react-router-dom";

const Pagelayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { pathname } = useLocation();

  const renderLayout = pathname !== "/";

  return (
    <div className="h-screen flex relative text-black bg-white w-screen overflow-hidden ">
      {showSidebar && (
        <div
          className="fixed inset-0 bg-gray-900/55  z-40 xl:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
      {renderLayout && (
        <div
          className={`left_sidebar xl:w-[290px] h-full bg-white transform transition-transform duration-300 ease-in-out ${
            showSidebar ? "show" : ""
          } `}
        >
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
      )}

      <div className={`flex-1 px-5 xl:px-9 pt-5 xl:pt-12 overflow-scroll ${renderLayout ? "bg-gray-50" : "bg-purple-100"}`}>
        {renderLayout && <Navbar setShowSidebar={setShowSidebar} />}
        {children}
      </div>
    </div>
  );
};

export default Pagelayout;
