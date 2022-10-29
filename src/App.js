import React from 'react';
import { Header } from './components/Header';
import { Movies } from './components/Movies';
import './sass/main.sass'

// GET/movie?field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06

function App() {

  // getMovie();

  return (
    <>
      <Header />
      <Movies />
    </>
  );
}

export default App;
