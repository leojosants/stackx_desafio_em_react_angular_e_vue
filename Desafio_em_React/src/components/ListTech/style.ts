import styled from "styled-components";

export const Container = styled.div`
    background: var(--shark);
    width: 100%; /**/
    height: 10.8rem; /**/
    border: 1px solid var(--brown);
    border-radius: 8px;
    padding: 1.3rem 5rem;
    font-size: 1.25rem;
    line-height: 32px;

    ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100%;
        margin-right: -5rem;

        li {
            margin-bottom: .3rem;
        }
    }
    
   button {
        margin: 0;
        margin-left: -60px;
        background: var(--shark);
        border: none;
        font-style: normal;
        font-weight: 600px;
        font-size: 1.25rem;
        line-height: 160%;
        transition: filter(0.2s);

        &:hover {
            filter: brightness(0.9);
        }
    } 

`;