import * as React from 'react';
import * as ReactDOM from 'react-dom/client';  

import { Provider } from 'react-redux';
import App from './App';
import './styles/tailwind.css';
import store from './store';
import './styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);
