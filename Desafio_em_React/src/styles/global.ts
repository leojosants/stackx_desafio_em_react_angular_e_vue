//

import { createGlobalStyle } from 'styled-components'

export const GlobbalStyle = createGlobalStyle`
    :root {
        --shark:     #27272A;
        --white:     #FFFFFF;
        --brown:     #9D4B00;
        --galery:    #EDEDED;
        --cod-gray:  #121212
    }

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background: var(--cod-gray);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    } 

    [disabled] {
        opacity: 0.8;
        cursor: not-allowed;
    }

`;