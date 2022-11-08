import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-rows: 100px 450px 150px;
    grid-template-areas: "header", "area", "footer";

    min-height: 100vh;
`;

export const Section = styled.div`
    /* grid-area: area; */

    max-width: 980px;
    margin: 168px auto 325px;    
    width: 55rem;    

    h1 {
        margin: 0px;
        padding: 0px;
        margin-bottom: 60px;
        font-size: 1.5rem; 
        line-height: 38.4px;
    }
   
`; 