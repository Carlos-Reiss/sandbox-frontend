import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';

interface InputErrorProps {
  inputError: boolean;
}
interface ButtonProps {
  loading: boolean;
}
const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px)
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

const FiLoader = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<InputErrorProps>`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    animation: ${appearFromRight} 1s;
    width: 300px;
    display: flex;
    flex-direction: column;

    input {
      height: 48px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
      padding: 0 30px;

      ${props =>
        props.inputError &&
        css`
          border: 1px solid;
          border-color: #eb4c34;
        `}
    }
  }
`;

export const LogoDiv = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 30px;
  padding: 10px;

  div {
    border-left: 1px solid #ddd;
    padding-left: 10px;
  }
  h1 {
    color: ${props => props.theme.color.text};
  }
  background: ${props => props.theme.color.logoBackground};
  border-radius: 20px;
  box-shadow: 0px 4px 1px ${props => props.theme.color.borderLogoBackground};
  transition: background 1s;

  span {
    font-size: 12px;
    margin-left: 10px;
  }
`;

export const InputIcon = styled.div`
  input {
    width: 100%;
  }
  svg {
    position: absolute;
    margin-left: 10px;
    margin-top: 15px;
  }
`;

export const Error = styled.span`
  color: #eb4c34;
`;
export const SubmitButton = styled.button<ButtonProps>`
  height: 48px;
  border-radius: 4px;
  font-size: 16px;
  border: 0;
  padding: 0 20px;
  background: #345d7e;
  margin-top: 30px;
  transition: backdround 1s;
  :hover {
    background: ${shade(0.15, '#345d7e')};
  }
  color: #fff;
  font-weight: bold;

  svg {
    animation: ${FiLoader} linear infinite 2s;
  }
  ${props =>
    props.loading &&
    css`
      cursor: no-drop;
    `}
`;

export const BoxNextPage = styled.div`
  p {
    margin-top: 20px;
  }
  a {
    text-decoration: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: '#345d7e';
    margin-top: 80px;
  }
`;
