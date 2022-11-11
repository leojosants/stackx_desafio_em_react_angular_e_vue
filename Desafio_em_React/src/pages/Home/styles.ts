import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;
    color: var(--white);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.article`
    max-width: 800px; 49.3rem;
    min-width: 18.5rem;
    height: 100vh;
    padding-top: 7rem;
    padding-bottom: 1rem;
    margin: auto;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    h1 {
        font-weight: 400;
        font-size: 1.4rem;
        text-align: justify;
        margin-bottom: 2rem;
    }
    
    @media only screen and (max-width: 600px) {
        h1 { 
            text-align: center;
        }
    }

    @media only screen and (min-width: 600px) {
        h1 { 
            text-align: center;
        }
    }

`;