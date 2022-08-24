import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'

import { Home } from './components/rotas/Home';
import { Contacts } from './components/rotas/Contacts';
import { Cadastrar } from './components/rotas/Cadastrar';
import { Clientes } from './components/rotas/Clientes';
import { Header } from './components/rotas/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
   <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/contatos" element={<Contacts />}>
        </Route>
        <Route path="/cadastrar" element={<Cadastrar />}>
        </Route>
        <Route path="/clientes" element={<Clientes />}>
        </Route>
        </Routes>
    </BrowserRouter>
     </React.StrictMode>
)
