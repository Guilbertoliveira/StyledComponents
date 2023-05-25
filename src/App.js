import React from "react";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import Switcher from "./Components/Switcher";
import { useState } from "react";



function App() {

  const [temaStatus, setTemaStatus] = useState(true);

  function ClaroEscuro () {
    setTemaStatus(!temaStatus);
  }

  return (
   
      <ThemeProvider theme={temaStatus? temaClaro: temaEscuro}>
        <BtnTema onClick={ClaroEscuro}><Switcher tema={temaStatus}></Switcher></BtnTema>
        <GlobalStyle></GlobalStyle>
        <Cabecalho />
        <Container />
      </ThemeProvider>   
    
  );
}

export default App;
