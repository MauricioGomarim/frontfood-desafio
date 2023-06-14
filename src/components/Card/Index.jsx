import { Container } from "./style";
import img1 from "../../assets/Mask group-1.png";
import { api } from "../../services/api"
import { MdRemove, MdOutlineAdd } from "react-icons/md";
export function Card({ data, ...rest}) {


  const imgURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : img1;
  return (
    <Container {...rest} >
      <div className="Infos-card" >
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
    </Container>
  );
}
