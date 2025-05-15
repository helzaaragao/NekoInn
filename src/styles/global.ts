import { createGlobalStyle } from "styled-components" 


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    body, input, textarea, button{
        font-family: 'Poppins', serif;
        font-style: normal;
        font-weight: 400;
    }

    body{
        -webkit-font-smoothing: antialiased; 
        color: ${({ theme }) => theme.colors["background/text"]};
        background-color: ${({ theme }) => theme.colors["day-background"]};
     
    }

    button{
        border: none;
        cursor: pointer;
    }
        &[data-theme="dark"] {
            --background: #1a202c;
            --text: #ffffff;
            --primary: #63b3ed;
    // outras variáveis para o tema dark
  }
    &[data-theme="light"] {
    --background: #ffffff;
    --text: #2d3748;
    --primary: #3182ce;
    // outras variáveis para o tema light
  }
     
`
