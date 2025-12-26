import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuthStore from "@/stores/authStore";

const ProfileLink = () => {
  const { user } = useAuthStore();
  if (!user || !user.fullName) return null;

  const nameParts = user.fullName.trim().split(/\s+/); 
  const firstName = nameParts[0] || "";
  const secondName = nameParts[1] || "";

  const firstInitial = firstName.charAt(0) || "";
  const secondInitial = secondName.charAt(0) || "";


  return (
    <div className="flex items-center gap-4 border-t-2 h-20 justify-center border-gray-400 text-black">
      <Avatar className={"w-14 h-14"}>
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback className={"text-white text-lg"}>{firstInitial + secondInitial}</AvatarFallback>
      </Avatar>
      <div className="truncate">
        <h3 className="font-bold text-lg">{firstName}</h3>
        <p className="text-gray-600 truncate">{user?.email}</p>
      </div>
    </div>
  );
};

export default ProfileLink;
