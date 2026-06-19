import { useState } from "react";
import { Container, Form, Title } from "./styles";
import { Input } from "../../../componentes/InputPadrao";
import { Button } from "../../../componentes/BotaoAction";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    console.log({
      email,
      senha
    });
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>

        <Input
          label="Email"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Button type="submit">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}