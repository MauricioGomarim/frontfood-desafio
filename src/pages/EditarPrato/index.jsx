import { Container, Content, Form } from "./style";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { SectionLabel } from "../../components/SectionLabel";
import { IngredientsTag } from "../../components/IngredientsTag";
import { Header } from "../../components/Header";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsUpload } from "react-icons/bs";

import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hook/auth";

export function EditarPrato() {
  const params = useParams();
  const [data, setData] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [image, setImage] = useState(null);
  const [newIngredient, setNewIngredient] = useState("");


  const navigate = useNavigate();

  async function handleEditarPrato() {




    if (ingredients.length < 1) {
      return alert("Erro: Adicione pelo menos um ingrediente!");
    }

    if (newIngredient) {
      return alert(
        "Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!"
      );
    }

    if (!price) {
      return alert("Erro: Você não informou o preço do prato!");
    }


    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    await api
      .put(`/pratos/${params.id}`, formData)
      .then(alert("Prato atualizado com sucesso!"), navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao atualizar o prato!");
        }
      });
  }

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

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  useEffect(() => {
    async function buscarDadosPrato() {
      const response = await api.get(`/pratos/${params.id}`);
      setData(response.data);

      const { title, description, category, price, ingredients } = response.data;

      setTitle(title);
      setDescription(description);
      setCategory(category);
      setPrice(price);
      setIngredients(ingredients.map((ingredient) => ingredient.name));

    }
    buscarDadosPrato();
  }, []);
  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Link to={"/"}>
            <ButtonText title="voltar" icon={MdKeyboardArrowLeft} />
          </Link>

          <Content>
            <h1>Editar prato</h1>
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
                  placeholder="Salada Ceasar"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </SectionLabel>

              <SectionLabel title="Categoria" className="r1-col3">
                <select
                  name="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option disabled selected>
                    Selecione...
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
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </SectionLabel>
              <SectionLabel title="Preço" className="r2-col2">
                <input type="text" placeholder="R$ 00,00" value={price} onChange={(e) => setPrice(e.target.value)} />
              </SectionLabel>
              <SectionLabel title="Descrição" className="r2-col3">
                <textarea
                  placeholder="Descrição"
                  value={data.description}
                ></textarea>
              </SectionLabel>
              <div className="button">
                <Button
                  title="Salvar alterações"
                  type="button"
                  onClick={handleEditarPrato}
                />
              </div>
            </Form>
          </Content>
        </main>
      )}
      <Footer />
    </Container>
  );
}
