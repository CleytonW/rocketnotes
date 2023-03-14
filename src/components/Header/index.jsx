import { RiShutDownLine } from "react-icons/ri";

import { Container, Profile, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile to='/profile'>
        <img src="https://github.com/CleytonW.png" 
        alt="User image"/>

        <div>
          <span>Welcome</span>
          <strong>Cleyton Melo</strong>
        </div>
      </Profile>
      <Logout>
       <RiShutDownLine/> 
      </Logout>
    </Container>
  );
}