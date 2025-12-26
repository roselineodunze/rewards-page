import { supabase } from "@/config/supabase";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toaster } from "@/components/ui/toaster";
import useAuthStore from "@/stores/authStore";


const useGoogleAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {login} = useAuthStore()

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
      });
    } catch (err) {
      console.log(err);
      toaster.create({
        description: "Something went wrong. Try again later.",
        type: "error",
        closable: true,
      });
    }
  };
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const user = session.user

        const minimalUser = {
          id: user.id,
          email: user.email,
          fullName: user.user_metadata?.full_name ?? null,
        };
        localStorage.setItem("user", JSON.stringify(minimalUser));
        login(user)


        toaster.create({
          description: "Login Successful",
          type: "success",
          closable: true,
        });

        setLoading(false);
        navigate("/rewards");
      } else {
        setLoading(false);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, [navigate]);
  return { signInWithGoogle, loading };
};

export default useGoogleAuth;
