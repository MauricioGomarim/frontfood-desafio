// Components //
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";

import { Container, Content, SectionTags } from "./style";
import { MdKeyboardArrowLeft } from "react-icons/md";
import imgProduct from "../../assets/Mask group-10.png";
import { MdRemove, MdOutlineAdd } from "react-icons/md";

import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hook/auth";
import { Link } from "react-router-dom";

export function Details() {
  const params = useParams();
  const [data, setData] = useState("");
  const user = useAuth();

  useEffect(() => {
    async function buscarDadosPrato() {
      const response = await api.get(`/pratos/${params.id}`);
      setData(response.data);
      console.log(data);
    }
    buscarDadosPrato();
  }, []);

  return (
    <Container>
      <Header />
        {
          data && (
            <main>
            <a href="">
              <MdKeyboardArrowLeft />
              voltar
            </a>
            <Content>
              <div className="col1">
                <img src={imgProduct} alt="" />
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
                  <div className="quantidade">
                    <MdRemove />
                    <p>01</p>
                    <MdOutlineAdd />
                  </div>
                  <div className="add">
                    <a href="#">incluir ∙ R$ 25,00</a>
                  </div>
                </div>
                   
                  
                ) : (
                  <div className="card-footer"><Link to={`/editarprato/${data.id}`}><Button title="Editar preto" /></Link></div>
                )}
              </div>
            </Content>
          </main>
          )
        }
    </Container>
  );
}
