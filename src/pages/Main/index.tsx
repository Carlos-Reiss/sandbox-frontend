import React, { useState, FormEvent } from 'react';
import { FiBox, FiLoader } from 'react-icons/fi';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link, useHistory } from 'react-router-dom';
import Modal, { ICustomModalStyle } from '@bdenzer/react-modal';
import logoAPP from '../../assets/logo.svg';
import {
  Container,
  LogoDiv,
  InputIcon,
  Error,
  SubmitButton,
  NextPage,
  BoxNextPage,
} from './styles';
import api from '../../services/api';

interface BoxProps {
  _id: string;
  title: string;
}

const Main: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [newBox, setNewBox] = useState('');
  const [box, setBox] = useState<BoxProps>({} as BoxProps);
  const [inputError, setInputError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

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
    setLoading(true);
    try {
      if (!newBox) {
        setInputError('Digite um nome para Box');
        setLoading(false);
        return;
      }

      const response = await api.post('/boxes', { title: newBox });

      setVisible(true);
      setBox(response.data);

      setNewBox('');
      setInputError('');
      setLoading(false);
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
        <SubmitButton loading={loading}>
          {loading ? <FiLoader size={20} color="#fff" /> : <p>Criar</p>}
        </SubmitButton>
      </form>
      <Modal
        closeModal={closeModal}
        shouldShowModal={visible}
        customStyle={ModalStyle}
      >
        <BoxNextPage>
          <h1>Criado box com sucesso!</h1>
          <p>
            Box: <strong>{box.title}</strong>
          </p>

          <Link to={`/boxes/${box._id}`}>
            ir para a Box
            <RiArrowRightSLine size={30} color="#345d7e" />
          </Link>
        </BoxNextPage>
      </Modal>
      <NextPage>
        <Link to="/boxes">
          <RiArrowRightSLine size={30} color="#345d7e" />
        </Link>
      </NextPage>
    </Container>
  );
};

export default Main;
