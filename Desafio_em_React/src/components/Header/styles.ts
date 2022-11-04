import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 1440px;
    height: 72px;
    left: 0px;
    top: 0px;
    padding: 15px;
    background: #27272A;

`;

export const Content = styled.div`
    position: absolute;
    width: 190px;
    height: 40px;
    left: 625px;
    top: 16px;
    border-radius: 8px;
    background:rgba(218, 218, 218, 0.33);
`;

export const ImageLogo = styled.img`
    position: absolute;
    width: 150px;
    height: 27.82px;
    left: 20px;
    top: 6px;
    cursor: pointer;
    transition: filter 0.2s;

    :hover {
        filter: brightness(0.2);
    }

`;