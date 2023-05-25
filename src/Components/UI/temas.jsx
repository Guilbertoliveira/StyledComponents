import { containerClaro, fundoClaro, textoFundoClaro, conteudoEscuro, fundoEscuro, textoFundoEscuro } from "./variaveis";

export const temaClaro = {
    body: fundoClaro,
    text: textoFundoClaro,
    inside: containerClaro,
    filter: ''
}

export const temaEscuro = {
    body: fundoEscuro,
    text: textoFundoEscuro,
    inside: conteudoEscuro,
    filter: "invert(100%)"
}