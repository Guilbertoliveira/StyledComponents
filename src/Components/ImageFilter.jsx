import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { Icone } from "./UI";




export default (type) => {
    const Images = {
      Restaurante: <Icone src={alimentacao}></Icone>,
      Utilidades: <Icone src={utilidades}></Icone>,
      Saude: <Icone src={saude}></Icone>,
      Transporte: <Icone src={transporte}></Icone>,
      default: <Icone src={outros}></Icone>
    }

    // ou retorna um dos icones ou imagem padrão
    return Images[type] || Images.default 
}