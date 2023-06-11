import { Link } from 'react-router-dom';

import { useAuth } from "../../hook/auth";
import { useState } from "react";
import { Button } from "../Button"
import { Container } from "./style";
import { BsSearch, BsReceipt } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/logo.png"

export function Header() {

  const { Logout, user } = useAuth();

  console.log(user.isAdmin)

  function handleLogout(){
    Logout();
    return
  }
  return (
    <Container>
      <nav>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <BsSearch />
          <input placeholder="Busque por pratos ou ingredientes"/>
        </div>
        <div className="newDish">
   {      user.isAdmin ? <Link to="/addprato"><Button title="Novo pedido"/></Link> : <a href="#">
            <BsReceipt />
            Pedidos(0)
          </a>}
          <FiLogOut onClick={handleLogout} />
        </div>
      </nav>
    </Container>
  );
}
