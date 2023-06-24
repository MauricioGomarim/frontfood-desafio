import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Logo } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Text } from "../../components/Text";
import { useState } from "react";
import img  from "../../assets/logo.png"

import {api} from "../../services/api"

export function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password){
      return alert("Preencha todos os campos!")
    }

    api.post("/users", {name, email, password}).then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/");
    }).catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar")
      }
    })

  }


  return (
    <Container>
      <Logo>
        <img src={img} />
      </Logo>
      <Form>
        <h1>Crie sua conta</h1>
        <Input label="Seu nome"  type="text" placeholder="Exemplo: Maria da Silva" onChange={e => setName(e.target.value)} />
        <Input label="Email"  type="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)} />
        <Input label="Senha" type="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)} />

        <Button title="Criar conta" type="button" onClick={handleSignUp} />
        <Link to="/">
        <Text title="Já tenho uma conta" />
        </Link>
      </Form>
    </Container>
  );
}
