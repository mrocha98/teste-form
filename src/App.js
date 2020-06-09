import React from 'react';
import { DevTool } from 'little-state-machine-devtools';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './store/storeProvider';
import Routes from './routes';
import Nav from './components/nav';
import './styles/bulma.scss';
import './styles/global.scss';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Nav />
        <Routes />
        <DevTool />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
