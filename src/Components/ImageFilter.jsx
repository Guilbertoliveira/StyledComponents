import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { IconeTema } from "./UI";




export default (type) => {
    const Images = {
      Restaurante: <IconeTema src={alimentacao}></IconeTema>,
      Utilidades: <IconeTema src={utilidades}></IconeTema>,
      Saude: <IconeTema src={saude}></IconeTema>,
      Transporte: <IconeTema src={transporte}></IconeTema>,
      default: <IconeTema src={outros}></IconeTema>
    }

    // ou retorna um dos icones ou imagem padrão
    return Images[type] || Images.default 
}