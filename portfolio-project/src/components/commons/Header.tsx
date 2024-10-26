import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../assets/common.css";

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="mx-3">
          <Navbar.Brand href="#">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="personal-information">인적사항</Nav.Link>
              <Nav.Link href="self-introduction">자기소개</Nav.Link>
              <Nav.Link href="work-experience">경력사항</Nav.Link>
              <Nav.Link href="projects">프로젝트</Nav.Link>
              <Nav.Link href="skills">보유기술</Nav.Link>
              <Nav.Link href="others">기타</Nav.Link>
              {/* 
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">1</NavDropdown.Item>
                  <NavDropdown.Item href="#">2</NavDropdown.Item>
                  <NavDropdown.Item href="#">3</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown> 
              */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
