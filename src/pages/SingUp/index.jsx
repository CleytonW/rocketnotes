import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


import { Container, Form, BackgroundIMG } from "./styles";

export function SingUp(){
  return(
   <Container>
    <BackgroundIMG/>
    <Form>
      <h1>Rocket Notes</h1>
      <p>Application for save and manage your useful links.</p>

      <h2>Create your account</h2>

      <Input
        placeholder="Name"
        type="text"
        icon={FiUser}
      />

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

      <Button title="Register"/>

      <Link to='/'>
      Back to Login
      </Link>
    </Form>
   </Container> 
  );
}