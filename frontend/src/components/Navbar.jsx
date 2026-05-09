import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import Merkato_logo from '../assets/Merkato_Logo.jpeg';

function MyNavbar() {
  return (
      <Navbar bg='black' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand >
            <img src={Merkato_logo} className="img-fluid" style={{ maxWidth: '120px', height: '120px', borderRadius: '200px' }} alt='Merkato' />
              Merkato
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        </Container>
      </Navbar>
  );
}

export default MyNavbar;

