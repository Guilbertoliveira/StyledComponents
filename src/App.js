import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ajuda from "./Paginas/Ajuda/Ajuda";
import PaginaInicial from "./Paginas/PaginaInicial/PaginaInicial";
import React from "react";



function App() {



  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial></PaginaInicial>}></Route>
          <Route path="/ajuda" element={<Ajuda></Ajuda>}></Route>
          
        </Routes>
      </BrowserRouter>
    
    
    
  );
}

export default App;
