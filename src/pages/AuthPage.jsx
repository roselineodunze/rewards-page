import React from "react";
import flowva from "../assets/flowva_logo.png";
import google from "../assets/google.png";
import useGoogleAuth from "@/hooks/useGoogleAuth";

const AuthPage = () => {
  const { signInWithGoogle, loading } = useGoogleAuth();
  return (
    <div className="flex flex-col items-center gap-10 h-full text-black">
      <figure className="h-32 w-32">
        <img src={flowva} />
      </figure>
      <div className="text-center">
        <h1 className="text-3xl">Welcome Back</h1>
        <p className="text-sm text-gray-600">
          Sign in with google to access your account
        </p>
      </div>
      <div
        className="flex items-center gap-3 bg-purple-200 h-14 px-4 rounded-xl cursor-pointer hover:text-purple-700"
        onClick={signInWithGoogle}
      >
        <figure className="h-7 w-7">
          <img src={google} />
        </figure>
        <p className="text-lg font-semibold">Sign in with Google</p>
      </div>
    </div>
  );
};

export default AuthPage;
