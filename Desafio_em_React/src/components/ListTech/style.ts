import styled from "styled-components";

export const Container = styled.div`
   
   border: 1px solid #9D4B00;
   border-radius: 8px;
   padding: 10px;
   margin: 0;
   background: #27272A;
   font-size: 1.25rem;
   line-height: 32px;
   
   li {
       margin-left: 30px;
   }

   button {
        background: #27272A;
        border: none;
        transition: filter(0.2s);

        &:hover {
            filter: brightness(0.9);
        }
    }

`;