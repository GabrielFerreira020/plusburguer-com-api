import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/menu/index.js';
import Login from'./pages/login de usuario/';
import Consultar from'./pages/consultar mesas/';
import Adicionar from'./pages/adicionar mesas/';
import Editar from'./pages/adicionar mesas/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact={true} element={<Menu/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Consultar' element={<Consultar/>}/>
        <Route path='/Adicionar' element={<Adicionar/>}/>
        <Route path='/Editar' element={<Editar/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

