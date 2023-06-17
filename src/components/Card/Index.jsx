import { Container } from "./style";
import img1 from "../../assets/Mask group-1.png";
import { api } from "../../services/api";
import { MdRemove, MdOutlineAdd } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";

import { useAuth } from "../../hook/auth";
import { useFavorites } from "../../hook/favorites";

export function Card({ data, ...rest }) {
  const { user } = useAuth();
  const { favorites, addDishToFavorite, removeDishFromFavorite } = useFavorites();

    const isFavorite = favorites.some((dish) => dish.title === data.title)

  const imgURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : img1;


  return (
    <Container {...rest}>
      {user.isAdmin ? (
        <div className="Container">
          <div className="icon">
            <Link to={`/details/${data.id}`}>
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
            <img src={imgURL} alt="produto" />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h1>R$ {data.price}</h1>
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
        </div>
      )}
      ;
    </Container>
  );
}
