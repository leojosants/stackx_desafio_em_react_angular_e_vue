import styled from "styled-components";

export const Container = styled.div`
   
   border: 1px solid var(--brown);
   border-radius: 8px;
   padding: 10px;
   background: var(--shark);
   font-size: 1.25rem; /* 20px */
   line-height: 32px;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   
   li {
       margin-left: 30px;
   }

   button {
        
        background: var(--shark);
        border: none;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600px;
        font-size: 1.25rem; /*20px */
        line-height: 160%;

        transition: filter(0.2s);

        &:hover {
            filter: brightness(0.9);
        }
    }

`;