import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --cod-gray: #121212;
        --white: #FFFFFF;
        --shark: #27272A;
        --brown: #9D4B00;
        --rgba: rgba(218, 218, 218, 0.33);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--cod-gray);
        -webkit-font-smoothing: antialiased;
        text-align: center;
    }

    body, button {
        font-family: 'Inter', sans-serif;
        color: var(--white);
    }

    button {
        cursor: pointer;
    }

`;