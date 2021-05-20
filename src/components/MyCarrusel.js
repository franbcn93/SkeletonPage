import React from "react";
import Carousel from "react-bootstrap/Carousel";
import useWindowSize from "../components/useWindowSize";
import imagen1 from "../images/imagen1.png";
import imagen3 from "../images/imagen3.jpg";

const MyCarrusel = () => {
  const [width, height] = useWindowSize();
  const sizeHearder = 60;

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            id="top"
            className="d-block w-100"
            src={imagen1}
            alt="First slide"
            style={{
              width: width,
              height: height - sizeHearder,
            }}
          />
          <Carousel.Caption>
            <h3 className="titleStyle titleHome">
              Política Integrada de Calidad, Seguridad y Salud
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dfb6ivozp/image/upload/v1620210534/hosp2_rezft2.jpg"
            alt="Second slide"
            style={{
              width: width,
              height: height - sizeHearder,
            }}
          />

          <Carousel.Caption>
            <h3 className="titleStyle titleHome">
              Comunicación Integral para Centros Hospitalarios
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen3}
            alt="Third slide"
            style={{
              width: width,
              height: height - sizeHearder,
            }}
          />

          <Carousel.Caption>
            <h3 className="titleStyle titleHome">Terminal en Punto de Venta</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MyCarrusel;
