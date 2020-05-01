import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { ThemeProvider } from 'styled-components';

import UsePersistedState from './utils/usePersistedState';

import Header from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = UsePersistedState('theme', dark);

  const { title } = theme;

  const toggleTheme = (): void => {
    setTheme(title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="container">

          <Header toggleTheme={toggleTheme} />
          <Routes />
        </div>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
