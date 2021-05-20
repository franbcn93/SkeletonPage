import React, { Component, useEffect, useState } from "react";
import { text1 } from "../components/text";
import { Container, Row } from "react-bootstrap";
import Footer from "../Footer/MyFooter";
import MyCarrusel from "../components/MyCarrusel";
import imagen1 from "../images/imagen1.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <MyCarrusel />
        <Container>
          <h1 id="one">Esto es el Home</h1>
          <Row>
            <div className="espace" id="section1">
              <h1>Título 1 </h1>
              <p>{text1}</p>
            </div>
            <div className="espace" id="section2">
              <h1>Título 2 </h1>
              <p>{text1}</p>
            </div>
            <div className="espace" id="section3">
              <h1>Título 3 </h1>
              <p>{text1}</p>
            </div>
            <div className="espace" id="section4">
              <h1 path="/Hola">Título 4 </h1>
              <p>{text1}</p>
            </div>
            <div className="espace" id="section5">
              <h1 path="">Título 5 </h1>
              <p>{text1}</p>
            </div>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
