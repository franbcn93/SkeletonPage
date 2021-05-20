import React, { Component } from "react";
import { text1 } from "../components/text";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer/MyFooter";

const Noticias = () => {
  return (
    <>
      <Container>
        <h1 id="one">Esto es Noticias</h1>
        <Row>
          <div className="espace">
            <h1>Título 6 </h1>
            {/* <Home /> */}
            <p>{text1}</p>
          </div>
          <div className="espace">
            <h1>Título 7 </h1>
            <p>{text1}</p>
          </div>
          <div className="espace" id="section8">
            <h1>Título 8 </h1>
            <p>{text1}</p>
          </div>
          <div className="espace">
            <h1 path="/Hola">Título 9 </h1>
            <p>{text1}</p>
          </div>
          <div className="espace">
            <h1 path="">Título 10 </h1>
            <p>{text1}</p>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Noticias;
