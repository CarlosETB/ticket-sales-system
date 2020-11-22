import React from 'react';

// Native
import { Link, useHistory } from "react-router-dom";

// Components
import { Button } from 'components/Button'

// Shared
import { Logo } from "shared/images";

// Private
import { Container, Image, Nav, ButtonLink } from "./styles";

const Header: React.FC = () => {
  const history = useHistory();

  const handleCreate = async () => {
    history.push("/");
  };

  return (
    <Container>
      <Link to='/'>
        <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2018%2F10%2Fsympla-logo-1.png&f=1&nofb=1' alt='Logo' />
      </Link>

      <Nav>
        <ButtonLink to='/create'>Criar evento</ButtonLink>
  
        <Button onClick={handleCreate}>Criar conta</Button>
      </Nav>
    </Container>
  );
};

export default Header;