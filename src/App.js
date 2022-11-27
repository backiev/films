import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from './components/Header';


import './sass/main.sass'


function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
