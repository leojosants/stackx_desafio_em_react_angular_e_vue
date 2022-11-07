import styled from "styled-components";

export const Container = styled.div`
    background: #27272A;
`;

export const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    padding: 1rem 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ImageLogo = styled.img`
    padding: 5px 8px;
    background: rgba(218, 218, 218, 0.33);
    border-radius: 8px;
  
  
  transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.5);
    }
`;