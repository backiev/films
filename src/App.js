import React from 'react';
import { Outlet, useRouteError } from "react-router-dom";
import { Footer } from './modules/Footer';
import { Header } from './modules/Header';


import './sass/main.sass'


function App() {
  let error = useRouteError();
  console.error(error);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
