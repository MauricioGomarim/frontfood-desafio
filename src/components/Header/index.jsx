import { Link } from "react-router-dom";

import { useAuth } from "../../hook/auth";
import { useState } from "react";
import { Button } from "../Button";
import { Container } from "./style";
import { BsSearch, BsReceipt } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/logo.png";

export function Header({search, favoritesFilter}) {
  const { Logout, user } = useAuth();

  function handleLogout() {
    Logout();
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
        <div className="newDish">
          {user.isAdmin ? (
            <Link to="/addprato">
              <Button title="Novo pedido" />
            </Link>
          ) : (
            <Link to="#">
              <BsReceipt />
              Pedidos(0)
            </Link>
          )}
          <FiLogOut onClick={handleLogout} />
        </div>
      </nav>
    </Container>
  );
}
