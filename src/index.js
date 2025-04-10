import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { App } from './components/App';
// import CampersList from './CampersList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/camper-160225">
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </BrowserRouter>
  </React.StrictMode>
);
