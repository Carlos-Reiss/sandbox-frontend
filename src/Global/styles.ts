import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: none
  }
  html,body{
    #root{
      height:100%;
    }
  }
  body{
    -webkit-font-smoothing: antialiased !important;
    font-size: 16px;
    color: #333;
    font-family: 'Roboto', Helvetica,sans-serif;

  }
  input, button{
    cursor: pointer;
  }

`;
