import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
