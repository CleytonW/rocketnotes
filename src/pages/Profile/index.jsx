import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';

import { Container, Form, Avatar } from "./styles.js";

export function Profile() {
  return(
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/CleytonW.png" 
            alt="user photo" 
          />

          <label htmlFor="avatar">
            <FiCamera/>

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />

        <Input
          placeholder="Current password"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="New password"
          type="password"
          icon={FiLock}
        />

        <Button title="Salve" />
        
      </Form>

    </Container>
  )
}