import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className="px-3 shadow-sm"
      expanded={expanded}
    >
      <Navbar.Brand href="/" onClick={closeNavbar}>
        Raphael Akpere
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : 'expanded')}
      />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" onClick={closeNavbar}>Home</Nav.Link>
          <Nav.Link href="#about" onClick={closeNavbar}>About</Nav.Link>
          <Nav.Link href="#projects" onClick={closeNavbar}>Projects</Nav.Link>
          <Nav.Link href="#skills" onClick={closeNavbar}>Skills</Nav.Link>
          <Nav.Link href="#contact" onClick={closeNavbar}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
