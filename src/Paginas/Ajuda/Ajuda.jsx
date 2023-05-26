import React from "react";
import Cabecalho from "../../Components/Cabecalho";
import { GlobalStyle } from "../../Components/GlobalStyle";
import { Box } from "../../Components/UI";
import styled from "styled-components";
import PostInformativo from "../../Components/PostInformativo/PostInformativo";

const BoxInformativo = styled(Box)`
margin: 20px auto;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.30);
color: gray;
text-align: center;
`


export default function Ajuda(){
   return( <>
   <GlobalStyle></GlobalStyle>
   <Cabecalho></Cabecalho>
   <BoxInformativo><PostInformativo></PostInformativo></BoxInformativo>
   </> )
}