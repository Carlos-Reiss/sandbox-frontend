import React from 'react';
import { MdInsertDriveFile } from 'react-icons/md';
import logo from '../../assets/logo.svg';
import { Container, Header } from './styles';

const Box: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Sandbox logo" />
        <div>
          <h1>Wallpaper 4K</h1>
          <span>Crie seus arquivos e guarde aqui!</span>
        </div>
      </Header>

      <ul>
        <li>
          <a href="RR">
            <MdInsertDriveFile size={24} color="#345d7e" />
            <strong>desafio.pdf</strong>
          </a>

          <span>há 3 minutos atrás</span>
        </li>
        <li>
          <a href="RR">
            <MdInsertDriveFile size={24} color="#345d7e" />
            <strong>desafio.pdf</strong>
          </a>

          <span>há 3 minutos atrás</span>
        </li>
      </ul>
    </Container>
  );
};

export default Box;
