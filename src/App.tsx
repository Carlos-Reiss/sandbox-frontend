import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Global } from './Global/styles';
import Routes from './router';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Global />
    </>
  );
};

export default App;
