import React, { useState, FormEvent } from 'react';
import { FiBox } from 'react-icons/fi';
import Modal, { ICustomModalStyle } from '@bdenzer/react-modal';
import logoAPP from '../../assets/logo.svg';
import { Container, LogoDiv, InputIcon, Error } from './styles';
import api from '../../services/api';

interface BoxProps {
  title: string;
}

const Main: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [newBox, setNewBox] = useState('');
  const [box, setBox] = useState<BoxProps>({} as BoxProps);
  const [inputError, setInputError] = useState('');

  const ModalStyle: ICustomModalStyle = {
    modalBackgroundOpen: {
      MozOpacity: 0.8,
    },
    animationTime: 400,
    closeButton: {
      color: '#FFF',
    },
    hoveredButtonText: {
      fontWeight: 'bold',
    },
    modalHeader: {
      backgroundColor: '#345d7e',
    },
    modalTitle: {
      color: '#fff',
    },
    modalBody: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  };

  async function handlesubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
      if (!newBox) {
        setInputError('Digite um nome para Box');
        return;
      }

      const response = await api.post('/boxes', { title: newBox });

      setVisible(true);
      setBox(response.data);

      setNewBox('');
      setInputError('');
    } catch (error) {
      setInputError('Erro ao Criar Box');
    }
  }
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <Container inputError={!!inputError}>
      <LogoDiv>
        <img src={logoAPP} alt="SandBox" />
        <h1>SandBox</h1>
      </LogoDiv>
      <form onSubmit={handlesubmit}>
        <InputIcon>
          <FiBox color="345d7e" />
          <input
            placeholder="Criar uma Box"
            value={newBox}
            onChange={e => setNewBox(e.target.value)}
          />
        </InputIcon>
        {inputError && <Error>{inputError}</Error>}
        <button type="submit">Criar</button>
      </form>
      <Modal
        closeModal={closeModal}
        shouldShowModal={visible}
        customStyle={ModalStyle}
      >
        <h1>Criado box com sucesso!</h1>

        <p>Box: {box.title}</p>
      </Modal>
    </Container>
  );
};

export default Main;
