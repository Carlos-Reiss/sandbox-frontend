import React from 'react';
import { Global } from './Global/styles';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <Main />
      <Global />
    </>
  );
};

export default App;
