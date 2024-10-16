import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../src/assets/logo-cocina.jpg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Menu({ setUsuarioLogueado, usuarioLogueado }) {
  const navegacion = useNavigate()
  
  const logout = ()=>{
    sessionStorage.removeItem('userKey')
    setUsuarioLogueado('')
    navegacion('/')
  }

  return (
    <Navbar expand="lg" className="bg-crud">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src={logo}
            alt="logo Rolling Coffee"
            className="img-fluid"
            width={85}
          />
        </Navbar.Brand>
        <NavLink end className="nav-link fs-2 text-warning-emphasis" to="/">
          Rolling Recetas
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to={"/"}>
              Inicio
            </NavLink>
            {usuarioLogueado !== "" ? (
              <>
                <NavLink end className="nav-link" to="/administrador">
                  Administrador
                </NavLink>
                <Button className="nav-link" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink end className="nav-link" to="/login">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
