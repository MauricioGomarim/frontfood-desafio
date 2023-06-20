import { Container } from "./style";
import { Link } from "react-router-dom";
import img1 from "../../assets/Mask group-1.png";
import { api } from "../../services/api";

export function CardFavorites({ data, ...rest }) {
  const imgURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : img1;
  return (
    <Container {...rest}>

        <div>
          <img src={imgURL} alt="imagem prato" />
        </div>
        <div className="text">
          <span>{data.title}</span>
          <Link to="#">Remover dos Favoritos</Link>
        </div>
    
    </Container>
  );
}
