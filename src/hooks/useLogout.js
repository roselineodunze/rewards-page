import { supabase } from "@/config/supabase";
import { LogOut } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toaster } from "@/components/ui/toaster";
import useAuthStore from "@/stores/authStore";

const useLogout = () => {
  const navigate = useNavigate();
  const {logout} = useAuthStore()


  const logOut = async () => {
    try {
      await supabase.auth.signOut();
      logout()
      navigate("/");
    } catch (err) {
      console.log(err);
      toaster.create({
        description: "Something went wrong. Try again later.",
        type: "error",
        closable: true,
      });
    }
  };

  return { logOut };
};

export default useLogout;
