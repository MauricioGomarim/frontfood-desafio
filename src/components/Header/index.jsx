import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hook/auth";
import { useCart } from "../../hook/cart";
import { useState } from "react";
import { Button } from "../Button";
import { Container } from "./style";
import { BsSearch, BsReceipt } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/logo.png";

export function Header({search, favoritesFilter}) {
  const navigate = useNavigate()
  const { Logout, user } = useAuth();
  const { carts } = useCart();
console.log(carts.length)

  function handleLogout() {
    Logout();
    navigate("/");
    return;
  }
  return (
    <Container>
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div>
          <BsSearch />
          <input placeholder="Busque por pratos ou ingredientes"  onChange={e => {search(e.target.value)}}/>
        </div>
        <div>
        <Link to="/meus-favoritos">Meus favoritos</Link>
        
        {user.isAdmin ? (
          <Link to="/addprato">Novo prato</Link>
        ) : (
          <Link to="/historico-pedidos">Historico de pedidos</Link>
        )}
        </div>
        <div className="newDish">
          {user.isAdmin ? (
            <Link to="/historico-pedidos">
              <Button title="Historico de pedidos" />   
            </Link>
          ) : (
            <Link to="/cart">
              <BsReceipt />
              Pedidos({carts.length})
            </Link>
          )}
          <FiLogOut onClick={handleLogout} />
        </div>
      </nav>
    </Container>
  );
}
