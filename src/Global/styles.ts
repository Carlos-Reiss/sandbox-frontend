import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
    background: ${props => props.theme.color.background};
    -webkit-font-smoothing: antialiased !important;
    font-size: 16px;
    color: ${props => props.theme.color.text};
    font-family: 'Roboto', Helvetica,sans-serif;

  }
  input, button{
    cursor: pointer;
  }

`;
