import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Movies } from './components/Movies';
import { Lists } from './components/Lists';
import { YourList } from './components/YourList';

import './sass/main.sass'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />}/>
        <Route path="/lists" element={<Lists />}/>
        <Route path="/yourlist" element={<YourList />}/>
      </Routes>
    </>
  );
}

export default App;
