import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";

export default class MyNavBar extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" className="navbarEx">
          <Navbar.Brand className="textColor" href="/">
            Inicio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/pagina1">Página 1</Nav.Link>
              <Nav.Link href="/pagina2">Página 2</Nav.Link>
              <NavDropdown title="Página 3" id="collasible-nav-dropdown">
                <NavDropdown.Item to="" href="/pagina3">
                  Página 3.1
                </NavDropdown.Item>
                <NavDropdown.Item href="#section4">Página 3.2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Página 3.3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="" href="#section5">
                  Página 3.4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/noticias">Noticias</Nav.Link>
              <Nav.Link eventKey={2} href="/pagina4">
                Página 4
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
