import { Container, Form, Logo } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Text } from "../../components/Text";

import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <Logo>
        <img src="/src/assets/logo.png" alt="logo" />
      </Logo>
      <Form>
        <h1>Faça login</h1>
        <Input
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        ></Input>
        <Input label="Senha" placeholder="No mínimo 6 caracteres"></Input>

        <Button title="Entrar" />

        <Text title="Criar conta" />

      </Form>
    </Container>
  );
}
