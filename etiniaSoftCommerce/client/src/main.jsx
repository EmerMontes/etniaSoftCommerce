import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Importa PersistGate
import { store, persistor } from './redux/store'; // Importa store y persistor
import App from './App';

const rootElement = document.getElementById('root');

const renderApp = () => {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Auth0Provider
        domain="dev-8ttgsrczpuh61vza.us.auth0.com"
        clientId="jNbkn37A8GHycO4v7EswBQJ5JblaIE4f"
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <PersistGate loading={<div>Loading...</div>} persistor={persistor}> {/* Usa PersistGate */}
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </Auth0Provider>
    </React.StrictMode>
  );
};

// Llamamos renderApp una vez para representar la aplicación
renderApp();