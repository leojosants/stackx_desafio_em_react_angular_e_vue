// 
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Courgette&family=Inter:wght@400;700&family=Lobster&family=PT+Serif&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Slabo+27px&display=swap');
    
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
