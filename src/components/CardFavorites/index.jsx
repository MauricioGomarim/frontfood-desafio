import { Container } from "./style";
import { Link } from "react-router-dom";
import img1 from "../../assets/Mask group-1.png";
import { api } from "../../services/api";
import { ButtonText } from "../ButtonText";
import { useFavorites } from "../../hook/favorites";

export function CardFavorites({ data, ...rest }) {

  const {  removeDishFromFavorite } = useFavorites();
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
          <ButtonText title="Remover dos Favoritos" onClick={() => removeDishFromFavorite(data)}/>
        </div>
    
    </Container>
  );
}
