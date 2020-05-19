import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

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

export const Container = styled.div`
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
    }
    button {
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
  h1 {
    color: #333;
  }
  background: #fff;
  border-radius: 20px;
  box-shadow: 5px 10px 8px rgba(0, 0, 0, 0.1);
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
