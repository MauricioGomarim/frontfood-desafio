import { ButtonText } from "../ButtonText";

import { Container } from "./style";
import img1 from "../../assets/Mask group-1.png";
import { api } from "../../services/api";
import { MdRemove, MdOutlineAdd } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hook/auth";
import { useFavorites } from "../../hook/favorites";
import { useCart } from "../../hook/cart";

export function Card({ data, ...rest }) {
  const { user } = useAuth();
  const { addDishToCart } = useCart();
  const { favorites, addDishToFavorite, removeDishFromFavorite } =
    useFavorites();
  const [quantity, setQuantity] = useState(1);

  const isFavorite = favorites.some((dish) => dish.title === data.title);
  const increase = () => {
    if (quantity > 19) {
      alert("Erro: A quantidade máxima é de 20 unidades");
      return;
    }
    setQuantity((count) => count + 1);
  };

  const decrease = () => {
    if (quantity < 2) {
      alert("Erro: A quantidade mínima é 1 unidade");
      return;
    }
    setQuantity((count) => count - 1);
  };

  const imgURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : img1;

  return (
    <Container {...rest}>
      {user.isAdmin ? (
        <div className="Container">
          <div className="icon">
            <Link to={`/editarprato/${data.id}`}>
              <TbEdit />
            </Link>
          </div>
          <div className="Infos-card">
            <Link to={`/details/${data.id}`}>
              <img src={imgURL} alt="produto" />
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <h1>R$ {data.price}</h1>
            </Link>
          </div>
        </div>
      ) : (
        <div className="Container">
          <div className="icon">
            <button
              className="favButton"
              onClick={() =>
                isFavorite
                  ? removeDishFromFavorite(data)
                  : addDishToFavorite(data)
              }
            >
              {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </div>
          <div className="Infos-card">
          <Link to={`/details/${data.id}`}>
            <img src={imgURL} alt="produto" />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h1>R$ {data.price}</h1>
            </Link>
          </div>

          <div className="card-footer">
            <div className="quantidade">
              <ButtonText icon={MdRemove} onClick={decrease} />
              <p>{quantity}</p>
              <ButtonText icon={MdOutlineAdd} onClick={increase} />
            </div>
            <div
              className="add"
              onClick={() => addDishToCart(data, quantity, imgURL)}
            >
              incluir
            </div>
          </div>
        </div>
      )}
      
    </Container>
  );
}
