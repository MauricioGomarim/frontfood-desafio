import { Container } from "./style";
import img1 from "../../assets/Mask group-1.png";

import { MdRemove, MdOutlineAdd } from "react-icons/md";
export function Card() {
  return (
    <Container>
      <div className="Infos-card">
        <img src={img1} alt="produto" />
        <h2>Spaguetti Gambe</h2>
        <p>Massa fresca com camarões e pesto. </p>
        <h1>R$ 79,97</h1>
      </div>

      <div className="card-footer">
        <div className="quantidade">
          <MdRemove />
          <p>01</p>
          <MdOutlineAdd />
        </div>
        <div className="add">
          <a href="#">incluir</a>
        </div>
      </div>
    </Container>
  );
}
