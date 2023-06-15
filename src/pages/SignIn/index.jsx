import { useAuth } from "../../hook/auth";
import { useState } from "react";

import { Container, Form, Logo } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";

import { Link } from "react-router-dom";

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({email, password});
  }

  return (
    <Container>
      <Logo>
        <img src="/src/assets/logo.png" alt="logo" />
      </Logo>
      <Form>
        <h1>Faça login</h1>
        <Input label="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)} />
        <Input label="Senha" type="password"placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)}/>

        <Button title="Entrar" type="button" onClick={handleSignIn} />
        <Link to="/register">
        <Text title="Criar conta" />
        </Link>
       
      </Form>
    </Container>
  );
}
