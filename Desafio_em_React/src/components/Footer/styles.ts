import styled from "styled-components";

export const Container = styled.div`
    max-width: 980px;
    margin: 0 auto;
    padding: 1rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
        margin-bottom: 28px;
        border: 0;
        border-radius: 8px;
        width: 8.3rem; /* 133px */
        height: 3.1rem; /* 51px */
        margin-top: 234px;
        background: #27272A;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600px;
        font-size: 1.25rem; /* 20px */
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