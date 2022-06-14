import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Tentang from './pages/Tentang';
import PetaAdat from './pages/PetaAdat';
import DataAdat from './pages/DataAdat';
import DetailAdat from './pages/DetailAdat';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
          <Route index element={<Tentang/>} />
          <Route path='peta' element={<PetaAdat/>} />
          <Route path='dataadat' element={<DataAdat/>} />
          <Route path='detailadat' element={<DetailAdat/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;