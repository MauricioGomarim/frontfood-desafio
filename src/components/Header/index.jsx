import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAuth } from "../../hook/auth";
import { useCart } from "../../hook/cart";
import { useState, useEffect } from "react";
import { Container, Busca, Search } from "./style";
import { BsSearch, BsReceipt } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { api } from "../../services/api";
import logo from "../../assets/logo.png";

export function Header({ search, favoritesFilter }) {
  const navigate = useNavigate();
  const { Logout, user } = useAuth();
  const { orders, carts } = useCart();

  function mobileMenu() {
    document.getElementById("hamburger").classList.toggle("active");
    document.getElementById("nav-menu").classList.toggle("active");
  }

  function userMenu() {
    document.getElementById("user-menu").classList.toggle("active");
  }

  function handleLogout() {
    Logout();
    navigate("/");
    return;
  }
  return (
    <Container>
      <nav>
        <div className="hamburger" id="hamburger" onClick={mobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="nav-menu" id="nav-menu">
          <Search>
            <label>
              <BsSearch />
              <input
                type="text"
                placeholder="Busque pelas opções de pratos"
                onChange={(e) => {
                  search(e.target.value);
                }}
              />
            </label>
          </Search>

          {user.isAdmin ? (
            <Link to="/addprato">Novo prato</Link>
          ) : (
            <>
              <Link to="/historico-pedidos">Historico de pedidos</Link>
              <Link to="/meus-favoritos">Meus favoritos</Link>
            </>
          )}

          <FiLogOut onClick={handleLogout} />
        </div>

        <div className="col1">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="icon-dishMobile">
          {user.isAdmin ? (
            <Link to="/orders">
              <BsReceipt />
              <p>{orders.length}</p>
            </Link>
          ) : (
            <Link to="/cart">
              <BsReceipt />
              <p>{carts.length}</p>
            </Link>
          )}
        </div>

        <div className="search">
          <BsSearch />
          <input
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => {
              search(e.target.value);
            }}
          />
        </div>
        <div className="col3">
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
              <BsReceipt />
              Pedidos({orders.length})
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
