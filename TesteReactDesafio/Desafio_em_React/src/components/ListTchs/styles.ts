// 
import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--shark);
    width: 800px;
    height: 10.8rem;
    border: 2px solid var(--brown);
    border-radius: .5rem;
    padding: 1.3rem 5rem;

    ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100%;
        margin-right: .5rem;
        
        li {
            margin-bottom: .3rem;
        }
    }


    @media only screen and (max-width: 600px) {
        align-items: center;
        height: auto;
        columns: 2;
    }
`;