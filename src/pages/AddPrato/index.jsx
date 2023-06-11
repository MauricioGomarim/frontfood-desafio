import { Container, Content, Form } from "./style";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { SectionLabel } from "../../components/SectionLabel";
import { Ingrediente } from "../../components/Ingrediente";
import { Header } from "../../components/Header";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsUpload } from "react-icons/bs";

export function AddPrato() {
  return (
    <Container>
      <Header />
      <main>
        <a href="#">
          <ButtonText title="voltar" icon={MdKeyboardArrowLeft} />
        </a>

        <Content>
          <h1>Adicionar prato</h1>
          <Form>
            <SectionLabel title="Imagem do prato" className="r1-col1">
              <label htmlFor="image-prato" className="slcImage">
                <BsUpload />
                <p>Selecione imagem</p>
                <input id="image-prato" type="file" />
              </label>
            </SectionLabel>

            <SectionLabel title="Nome" className="r1-col2">
              <input type="text" placeholder="Ex.: Salada Ceasar" />
            </SectionLabel>

            <SectionLabel title="Categoria" className="r1-col3">
              <select name="select">
                <option disabled selected>
                  Refeição
                </option>
                <option value="valor1">Prato</option>
                <option value="valor2">Bebida</option>
                <option value="valor3">Sobremesa</option>
              </select>
            </SectionLabel>

            <SectionLabel title="Ingredientes" className="r2-col1">
              <Ingrediente isNew placeholder="Adicionar" />
              <Ingrediente placeholder="Pão" />
            </SectionLabel>
            <SectionLabel title="Preço" className="r2-col2">
              <input type="text" placeholder="R$ 00,00" />
            </SectionLabel>
            <SectionLabel title="Descrição" className="r2-col3">
              <textarea placeholder="Descrição"></textarea>
            </SectionLabel>
            <div className="button">
              <Button title="Salvar alterações" />
            </div>
          </Form>
        </Content>
      </main>
    </Container>
  );
}
