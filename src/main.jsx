import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './components/rotas/Home';
import { Cadastrar } from './components/rotas/Cadastrar';
import { Clientes }  from './components/rotas/Clientes';
import { Menu } from './components/rotas/MenuLateral/Menu';
import { FormStep2 } from './components/Cadastro/FormStep2';
import { FormStep3 } from './components/Cadastro/FormStep3';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
   <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/cadastrar" element={<Cadastrar />}>
        </Route>
        <Route path="/cadastrar/formstep2" element={<FormStep2 />}>
        </Route>
        <Route path="/cadastrar/formstep2/formstep3" element={<FormStep3 />}>
        </Route>
        <Route path="/clientes" element={<Clientes />}>
        </Route>
        </Routes>
    </BrowserRouter>
     </React.StrictMode>
)
