import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagen1 from "../images/imagen1.png";
import imagen3 from "../images/imagen3.jpg";
import "../style/Pagina2.css";

export default class Pagina2 extends Component {
  render() {
    return (
      <>
        <h1>Estamos en la Página 2</h1>
        <Container>
          <Row>
            <Col>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20100.613792162447!2d2.144996285430664!3d41.5048356982462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4be21ff5a4773%3A0xe242e6979e5754af!2sEngel%20Axil!5e0!3m2!1ses!2ses!4v1621413625523!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>
        <div className="space"></div>
        <Container>
          <Row>
            <Col md={6}>
              <img className="imgPg2" src={imagen1} alt="First slide" />
            </Col>
            <Col md={6}>
              <img className="imgPg2" src={imagen3} alt="First slide" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={6}>
              <img className="imgPg22" src={imagen3} alt="First slide" />
            </Col>
            <Col md={6}>
              <img className="imgPg22" src={imagen1} alt="First slide" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={6}>
              <img className="imgPg23" src={imagen1} alt="First slide" />
            </Col>
            <Col md={6}>
              <img className="imgPg23" src={imagen3} alt="First slide" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="textCenter">
            <Col md={12}>
              <a to="https://www.google.es/" class="btn btn-2">
                Hover
              </a>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
