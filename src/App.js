import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Tentang from './pages/Tentang/Tentang';
import PetaAdat from './pages/PetaAdat/PetaAdat';
import DataAdat from './pages/DataAdat/DataAdat';
import DetailAdat from './pages/DetailAdat/DetailAdat';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
          <Route index element={<Tentang/>} />
          <Route path='peta' element={<PetaAdat/>} />
          <Route path='dataadat'>
            <Route index element={<DataAdat />} />
            <Route 
                path=":cultureId" 
                element={<DetailAdat/>} 
            />
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;