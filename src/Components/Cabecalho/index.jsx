import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import {corPrimaria} from '../UI/variaveis';
import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-around;
  padding: 0 1vw;
  height: 10vh;
  align-items: center;
`

const BtnCabecalho = styled.a`
text-align: center;
border-radius: 3px;
padding: 5px 20px;
margin: 0 10px;
font-weight: 600;
border: 2px solid white;
background: ${(props) => props.primary ? "white": corPrimaria};
color: ${(props) => props.primary ? corPrimaria : "white"};
`;

const Logo = styled.img`
height: 50px;
width: 50px;

@media screen and (max-width: 480px) {
display:none;
}

`;


const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
      <Link to={'/'}><BtnCabecalho primary>
          Inicio
        </BtnCabecalho></Link>
        <Link to={'/ajuda'}><BtnCabecalho primary>
          Ajuda
        </BtnCabecalho></Link>
        <BtnCabecalho href="https://google.com">
          Sair
        </BtnCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
