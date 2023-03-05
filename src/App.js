import React from 'react';
import { Outlet, useRouteError } from "react-router-dom";
import { Footer } from './modules/Footer';
import { Header } from './modules/Header';


import './sass/main.sass'


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
