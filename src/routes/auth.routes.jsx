import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { Signup } from "../pages/Signup";
import { EditarPrato } from "../pages/EditarPrato";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}
