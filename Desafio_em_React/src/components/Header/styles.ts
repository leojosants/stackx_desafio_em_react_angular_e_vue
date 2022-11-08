import styled from "styled-components";

export const Container = styled.div`
    /* grid-area: header; */

    background: var(--shark);
`;

export const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 1px 5px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ImageLogo = styled.img`
    padding: 5px 8px;
    background: var(--rgba);
    border-radius: 8px;
    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.5);
    }
`;