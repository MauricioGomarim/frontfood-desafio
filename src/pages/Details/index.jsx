// Components //

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";

import { Container, Content, SectionTags } from "./style";
import { BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import imgProduct from "../../assets/Mask group-10.png";
import { MdRemove, MdOutlineAdd } from "react-icons/md";

export function Details() {
  return (
    <Container>
      <Header />
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
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <SectionTags>
              <Tag title="section" />
              <Tag title="section" />
              <Tag title="section" />
              <Tag title="section" />
            </SectionTags>

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
          </div>
        </Content>
      </main>
    </Container>
  );
}
