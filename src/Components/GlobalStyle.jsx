import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;

    ::-webkit-scrollbar{
      width: 5px;
      height: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #41d3be;
    }
  }
`;