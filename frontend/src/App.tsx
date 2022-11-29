import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.scss';
import { HomePage } from './pages/home/home';

function App() {
  return (
    <Routes>
      <Route path='/' element = { <HomePage /> } />
    </Routes>
  );
}

export default App;
