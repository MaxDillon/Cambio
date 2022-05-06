import React from 'react';
import LoginPage from './Pages/Login/login-page';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import GamePage from './Pages/Game/game-page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<LoginPage />}/>
          <Route path='/game' element={<GamePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
