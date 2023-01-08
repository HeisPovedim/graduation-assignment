import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { News } from './pages/news/News';
import { PersonalAccount } from './pages/personal_account/PersonalAccount';

function App() {
  return (
    <Routes>
      <Route path='/' element = { <News /> } />
      <Route path='/personal_account' element = { <PersonalAccount /> } />
    </Routes>
  );
}

export default App;
