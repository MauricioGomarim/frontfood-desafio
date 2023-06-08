import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { AddPrato } from "../pages/AddPrato";
import { EditarPrato } from "../pages/EditarPrato";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addprato" element={<AddPrato />} />
      <Route path="/editarprato" element={<EditarPrato />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}
