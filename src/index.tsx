import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from 'react-redux';

import Chat from './components/chat/Chat';
import Home from './components/home/Home';
import { store } from './store/store';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
