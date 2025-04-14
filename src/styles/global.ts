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
        color: ${({ theme }) => theme.colors['background/text']};
    }
`
