import Header from './components/Header';
import MainPage from './components/MainPage';
import { data1, data2, data3 } from './data';
import './index.css';
import React, { useState } from 'react';

function App() {
  const [type, setType] = useState('data1');
  return (
    <>
      <Header  setType={setType}/>
      <MainPage type={type=='data1' ? data1 : type =='data2' ? data2 : data3} />
    </>
  );
}

export default App;


