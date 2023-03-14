import { FiLock, FiMail } from "react-icons/fi";

import { Link } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


import { Container, Form, BackgroundIMG } from "./styles";

export function SingIn(){
  return(
   <Container>
    <Form>
      <h1>Rocket Notes</h1>
      <p>Application for save and manage your useful links.</p>

      <h2>Login</h2>

      <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
      />

      <Input
        placeholder="Password"
        type="password"
        icon={FiLock}
      />

      <Button title="Login"/>

      <Link to='/register'>
      Create an account
      </Link>
    </Form>

    <BackgroundIMG/>
   </Container> 
  );
}