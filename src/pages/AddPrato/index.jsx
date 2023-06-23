import { Container, Content, Form } from "./style";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { SectionLabel } from "../../components/SectionLabel";
import { IngredientsTag } from "../../components/IngredientsTag";
import { Header } from "../../components/Header";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import { api } from "../../services/api";

export function AddPrato() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Adicionar ingredientes
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();
  //Adicionando ingrediente dentro da variavel ingredients
  function handleAddIngredient() {
    if (newIngredient.length < 3) {
      return alert(
        "Erro: Você está tentando inserir um nome de ingrediente inválido!"
      );
    } else {
      setIngredients((prevState) => [...prevState, newIngredient]);
      setNewIngredient("");
    }
  }

  //removendo ingrediente
  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }
  // Criar prato
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

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map((ingredient) => formData.append("ingredients", ingredient));
    console.log(title);

    await api
      .post("/pratos", formData).catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao criar o prato!");
        }
      }).then(alert("Prato adicionado com sucesso!"));
      
      navigate("/");
      return
  }

  return (
    <Container>
      <Header />
      <main>
        <Link to={"/"}>
          <ButtonText title="voltar" icon={MdKeyboardArrowLeft} />
        </Link>

        <Content>
          <h1>Adicionar prato</h1>
          <Form>
            <SectionLabel title="Imagem do prato" className="r1-col1">
              <label htmlFor="image-prato" className="slcImage">
                <BsUpload />
                <p>Selecione imagem</p>
                <input
                  type="file"
                  id="image-prato"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </SectionLabel>

            <SectionLabel title="Nome" className="r1-col2">
              <input
                type="text"
                placeholder="Ex.: Salada Ceasar"
                onChange={(e) => setTitle(e.target.value)}
              />
            </SectionLabel>

            <SectionLabel title="Categoria" className="r1-col3">
              <select
                name="select"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option disabled selected>
                  Selecione..
                </option>
                <option value="Refeição">Refeição</option>
                <option value="Bebida">Bebida</option>
                <option value="Sobremesa">Sobremesa</option>
              </select>
            </SectionLabel>

            <SectionLabel title="Ingredientes" className="r2-col1">
              {ingredients.map((ingredient, index) => (
                <IngredientsTag
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}
              <IngredientsTag
                isNew
                placeholder="Adicionar"
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />
            </SectionLabel>
            <SectionLabel title="Preço" className="r2-col2">
              <input
                type="text"
                placeholder="00,00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </SectionLabel>
            <SectionLabel title="Descrição" className="r2-col3">
              <textarea
                placeholder="Descrição"
                onChange={(e) => setDescription(e.target.value)}
              />
            </SectionLabel>
            <div className="button">
              <Button
                title="Salvar alterações"
                type="button"
                onClick={handleNewDish}
              />
            </div>
          </Form>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
