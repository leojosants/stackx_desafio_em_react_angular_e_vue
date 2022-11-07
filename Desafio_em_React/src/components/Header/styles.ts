import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
    background: #27272A;
`;

export const Content = styled.div`
    height: 40px;
    width: 180px;
    background: rgba(218, 218, 218, 0.33);
    border-radius: 8px;
    padding: 3px;
    text-align: center;
`;

export const ImageLogo = styled.img`
    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.5);
    }
`;