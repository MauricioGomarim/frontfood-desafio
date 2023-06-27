// Components //
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

import { Container, Content, SectionTags } from "./style";
import { MdKeyboardArrowLeft } from "react-icons/md";
import imgProduct from "../../assets/Mask group-1.png";
import { MdRemove, MdOutlineAdd } from "react-icons/md";

import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hook/auth";
import { useCart } from "../../hook/cart";

import { Link } from "react-router-dom";

export function Details() {
  const params = useParams();
  const [data, setData] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addDishToCart } = useCart();
  const user = useAuth();

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

  const navigate = useNavigate();

  const imgURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : imgProduct;

  async function handleDelete() {
    await api.delete(`/pratos/${params.id}`);
    navigate("/");
    return;
  }

  useEffect(() => {
    async function buscarDadosPrato() {
      const response = await api.get(`/pratos/${params.id}`);
      setData(response.data);
      console.log(data.image);
    }
    buscarDadosPrato();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Link to={"/"}>
            <MdKeyboardArrowLeft />
            voltar
          </Link>
          <Content>
            <div className="col1">
              <img src={imgURL} alt="" />
            </div>
            <div className="col2">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <SectionTags>
                {data.ingredients.map((ingredient) => (
                  <Tag title={ingredient.name} />
                ))}
              </SectionTags>

              {user.isAdmin ? (
                <div className="card-footer">
                  <Link to={`/editarprato/${data.id}`}>
                    <Button title="Editar prato" />
                  </Link>

                  <Button title="Excluir prato" onClick={handleDelete} />
                </div>
              ) : (
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
                    <a href="#">incluir ∙ R$ 25,00</a>
                  </div>
                </div>
              )}
            </div>
          </Content>
        </main>
      )}
    </Container>
  );
}
