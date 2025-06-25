import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router";
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Chat from './components/chat/Chat';
import Home from './components/home/Home';
import { store } from './store/store';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
