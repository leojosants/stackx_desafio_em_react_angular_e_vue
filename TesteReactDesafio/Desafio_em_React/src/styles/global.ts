// 
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --cod-gray: #121212;
        --white: #FFFFFF;
        --shark: #27272A;
        --brown: #9D4B00;
        --rgba: rgba(218, 218, 218, 0.33);
        --font-inter: 'Inter', sans-serif;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--cod-gray);
        -webkit-font-smoothing: antialiased;
    }
    
    body, button, h1, p {
        font-family: var(--font-inter);
    } 

    button {
        cursor: pointer;
        
        :hover {
            filter: brightness(.6);
        }
    }
`;
