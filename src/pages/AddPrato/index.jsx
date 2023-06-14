import { Container, Content, Form } from "./style";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { SectionLabel } from "../../components/SectionLabel";
import { IngredientsTag } from "../../components/IngredientsTag"
import { Header } from "../../components/Header";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsUpload } from "react-icons/bs";

export function AddPrato() {
  // Create New Dish Function
  async function handleNewDish() {
    if (!image) {
      return alert("Erro: Você não inseriu uma imagem para o prato!");
    }

    if (!title) {
      return alert("Erro: Você não informou o nome do prato!");
    }

    if (ingredients.length < 1) {
      return alert("Erro: Adicione pelo menos um ingrediente!");
    }

    if (newIngredient) {
      return alert(
        "Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!"
      );
    }

    if (!category) {
      return alert("Erro: Você não selecionou a categoria do prato!");
    }

    if (!price) {
      return alert("Erro: Você não informou o preço do prato!");
    }

    if (!description) {
      return alert("Erro: Você não informou uma descrição para o prato!");
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    await api
      .post("/dishes", formData)
      .then(alert("Prato adicionado com sucesso!"), navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao criar o prato!");
        }
      });

    setLoading(false);
  }

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
              <IngredientsTag
              isNew
                // key={String(index)}
                // value={ingredient}
                // onClick={() => handleRemoveIngredient(ingredient)}
              />
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
