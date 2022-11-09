import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    height: 4.5rem;
    position: fixed;
    background: var(--shark);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageLogo = styled.img`
    width: 11.8rem;
    height: 2.5rem;
    padding: .5rem 1.2rem;
    border-radius: .5rem;
    background:  var(--rgba);
    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.5);
    }
`;