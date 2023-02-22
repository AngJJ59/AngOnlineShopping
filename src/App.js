import React from 'react'

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/register' element={RegisterPage}/>
          <Route path='/login' element={LoginPage}/>
          <Route path='/' element={HomePage}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
