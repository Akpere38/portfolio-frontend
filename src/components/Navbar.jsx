import { Navbar, Nav } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="px-3 shadow-sm">
      <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
