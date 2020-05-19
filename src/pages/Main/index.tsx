import React, { useState } from 'react';
import { FiBox } from 'react-icons/fi';
import logoAPP from '../../assets/logo.svg';
import { Container, LogoDiv, InputIcon } from './styles';
import api from '../../services/api';

const Main: React.FC = () => {
  const [newBox, setNewBox] = useState('');

  const handlesubmit = () => {};

  return (
    <Container>
      <LogoDiv>
        <img src={logoAPP} alt="SandBox" />
        <h1>SandBox</h1>
      </LogoDiv>
      <form onSubmit={handlesubmit}>
        <InputIcon>
          <FiBox color="345d7e" />
          <input placeholder="Criar uma Box" onChange={} />
        </InputIcon>
        <button type="submit">Criar</button>
      </form>
    </Container>
  );
};

export default Main;
