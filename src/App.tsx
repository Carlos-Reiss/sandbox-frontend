import React, { useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Global from './Global/styles';
import Routes from './router';
import Header from './components/header';
import light from './Global/themes/light';
import dark from './Global/themes/dark';
import usePersistedState from './utils/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme, setTheme]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <Global />
      </ThemeProvider>
    </>
  );
};

export default App;
