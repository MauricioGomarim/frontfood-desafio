import { Container } from "./style";
import { BsSearch, BsReceipt } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/logo.png"

export function Header() {
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
        <div>
          <a href="#">
            <BsReceipt />
            Pedidos(0)
          </a>
          <FiLogOut />
        </div>
      </nav>
    </Container>
  );
}
