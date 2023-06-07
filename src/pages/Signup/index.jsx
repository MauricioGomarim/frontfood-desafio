import { Container, Form, Logo } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Logo>
        <img src="/src/assets/logo.png" alt="logo" />
      </Logo>
      <Form>
        <h1>Crie sua conta</h1>
        <Input label="Seu nome" placeholder="Exemplo: Maria da Silva"/>
        <Input
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <Input label="Senha" placeholder="No mínimo 6 caracteres" />

        <Button title="Criar conta" />
        <ButtonText title="Já tenho uma conta" />  

      </Form>
    </Container>
  );
}
