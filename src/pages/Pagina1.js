import React, { Component } from "react";
import "../style/Pagina1.css";
import { text1 } from "../components/text";

export default class Pagina1 extends Component {
  render() {
    return (
      <>
        <div class="section-1 box">
          <h1>Estamos en la Página 1</h1>
        </div>

        <div class="section-2 box">
          <h1>Excepteur sint occaecat cupidatat non proident</h1>

          <p>{text1}</p>
        </div>

        <div class="section-3 box">
          <h1>Duis aute irure dolor in reprehenderit in voluptate</h1>
        </div>

        <div class="section-4 box">
          <h1>Excepteur sint occaecat cupidatat non proident</h1>

          <p>{text1}</p>
        </div>
      </>
    );
  }
}
