import { useState } from 'react';
import { Container, Form, Title } from "./styles";
import { Link } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import logo from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <Title>
          <img
            src={logo}
          />
          <h1>food explorer</h1>
        </Title>

        <span>Email</span>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />

        <span>Senha</span>
        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <a href="#">
          Criar uma conta
        </a>

        {/* <Link to="/register">
          Criar conta
        </Link> */}

      </Form>
    </Container>
  );
}