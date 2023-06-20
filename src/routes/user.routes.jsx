import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Index";
import { Details } from "../pages/Details";
import { Cart } from "../pages/Cart"
import { Orders } from "../pages/Orders"
import { MyFavorites } from "../pages/MyFavorites"



export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/historico-pedidos" element={<Orders />} />
      <Route path="/meus-favoritos" element={<MyFavorites />} />


    </Routes>
  );
}
