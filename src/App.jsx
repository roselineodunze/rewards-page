import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RewardsPage from "./pages/RewardsPage";
import Pagelayout from "./layouts/Pagelayout";
import AuthPage from "./pages/AuthPage";
import useAuthStore from "./stores/authStore";
import { supabase } from "./config/supabase";

function App() {
  const authUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  };

  return (
    <>
      <Pagelayout>
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
        <Routes>
          <Route
            path="/rewards"
            element={authUser ? <RewardsPage /> : <AuthPage />}
          />
        </Routes>
      </Pagelayout>
    </>
  );
}

export default App;
