import { Container, Form, Title } from "./styles";
import { Link } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import logo from "../../assets/logo.svg";

export function SignIn() {
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
        />

        <span>Senha</span>
        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
        />

        <Button title="Entrar" />

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