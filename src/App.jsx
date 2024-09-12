import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BaseLayout from "./layouts/BaseLayout";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Talleres from './pages/Talleres';
import Contacto from './pages/Contacto';
import Carrito from './pages/Cart';
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route exact path='/' element={<Home />} /> 
          <Route exact path='/detalle/:id' element={<Detail />} />
          <Route exact path='/talleres' element={<Talleres />} /> 
          <Route exact path='/contacto' element={<Contacto />} /> 
          <Route exact path='/carrito' element={<Carrito />} /> 
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
