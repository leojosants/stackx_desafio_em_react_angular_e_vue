import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    button {
        border: 0;
        border-radius: 8px;
        width: 8.3rem;
        height: 3.1rem;
        margin-top: 700px;
        background: var(--shark);
        font-style: normal;
        font-weight: 600px;
        font-size: 1.25rem;
        line-height: 160%;
        transition: filter(0.2s);

        &:hover {
            filter: brightness(0.7);
        }
    }

`;

export const ImageBrazil = styled.img`
    margin-right: 10px;
`;


export const ImageSpain = styled.img`
    margin-right: 10px;
`;

export const ImageUnitedStates = styled.img`
    margin-right: 10px;

`;