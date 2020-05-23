import React, { useEffect, useState, useCallback } from 'react';
import { MdInsertDriveFile } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { useRouteMatch, Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Dropzone from 'react-dropzone';

import logo from '../../assets/logo.svg';
import { Container, Header, Logo, Upload, NextPage } from './styles';
import api from '../../services/api';

interface BoxProps {
  id: string;
}

interface FileInterface {
  id: string;
  url: string;
  title: string;
  createdAt: string;
}

interface BoxInterface {
  _id: string;
  title: string;
  files: FileInterface[];
}

const Box: React.FC = () => {
  const [box, setBox] = useState<BoxInterface>({} as BoxInterface);
  const [files, setFiles] = useState<FileInterface[]>([]);
  const { params } = useRouteMatch<BoxProps>();

  useEffect(() => {
    async function loadFiles() {
      const response = await api.get(`boxes/${params.id}`);

      setBox(response.data.boxes);
      setFiles(response.data.boxes.files);
    }
    loadFiles();
  }, [params.id]);

  const onDrop = useCallback(
    async (file: File[]) => {
      const data = new FormData();

      data.append('file', file[0]);

      await api.post(`/files/boxes/${box?._id}`, data);
      const response = await api.get(`boxes/${params.id}`);

      setFiles(response.data.boxes.files);
    },
    [box]
  );

  const handleDelete = async (id: string) => {
    await api.delete(`/files/${id}/boxes/${box._id}`);
    const newFiles = files.filter(file => file.id !== id);
    setFiles(newFiles);
  };

  return (
    <Container>
      <Header>
        <Logo>
          <Link to="/">
            <img src={logo} alt="Sandbox logo" />
          </Link>
          <h1>SandBox</h1>
        </Logo>
        <div>
          <h1>{box && box.title}</h1>
          <span>Crie sua Box e guarde seus arquivos aqui!</span>
        </div>
      </Header>
      <Dropzone onDropAccepted={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <Upload {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Arrastar arquivos ou clique aqui para adicionar arquivos</p>
          </Upload>
        )}
      </Dropzone>

      <ul>
        {files &&
          files.map(file => (
            <li key={file.id}>
              <a href={file.url} target="_blank">
                <MdInsertDriveFile size={24} color="#666" />
                <strong>{file.title}</strong>
              </a>
              <div>
                <span>
                  {formatDistance(new Date(file.createdAt), new Date(), {
                    addSuffix: true,
                    locale: pt,
                  })}
                </span>
                <button type="button" onClick={() => handleDelete(file.id)}>
                  <FiTrash2 color="#666" />
                </button>
              </div>
            </li>
          ))}
      </ul>
      <NextPage>
        <Link to="/">
          <RiArrowLeftSLine size={30} />
        </Link>
      </NextPage>
    </Container>
  );
};

export default Box;
