import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        /* PASSAR CORES PRA CÁ */
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #121212;
        -webkit-font-smoothing: antialiased;
    }

    body, button {
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }



`;