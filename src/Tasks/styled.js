import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 20px;
    list-style: none;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 15px;
    align-items: center;
    border-bottom: 1px solid hsl(0, 10%, 89%);

    ${({ hidden }) => hidden && css`
       display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({ done }) => done && css`
      text-decoration: line-through;`}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.8s;
    

    ${({ done }) => done && css`
      background: hsl(120, 100%, 25%);
      color: white; 

      & :hover {
        background: hsl(120, 100%, 30%);
      }
      & :active {
        background: hsl(120, 100%, 35%);
      }
    `}
      
    ${({remove}) => remove && css `
      background: hsl(0, 98%, 44%);

      & :hover {
        background: hsl(0, 98%, 50%);
      }

      & :active {
        backbround:  hsl(0, 98%, 55%);s
      }
    `}
`;