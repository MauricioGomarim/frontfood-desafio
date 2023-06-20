import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Index";
import { AddPrato } from "../pages/AddPrato";
import { EditarPrato } from "../pages/EditarPrato";
import { Details } from "../pages/Details";
import { Cart } from "../pages/Cart"
import { Orders } from "../pages/Orders"
import { MyFavorites} from "../pages/MyFavorites"


export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addprato" element={<AddPrato />} />
      <Route path="/editarprato/:id" element={<EditarPrato />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/historico-pedidos" element={<Orders />} />
      <Route path="/meus-favoritos" element={<MyFavorites />} />


    </Routes>
  );
}
