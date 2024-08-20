import Header from './components/Header';
import MainPage from './components/MainPage';
import './index.css';
import React, { useState } from 'react';

import i1 from './image/i1.jpg';
import i2 from './image/i2.jpg';
import i3 from './image/i3.jpg';
import i4 from './image/i4.jpg';
import i5 from './image/i5.jpg';

import q1 from './image/q1.jpg';
import q2 from './image/q2.jpg';
import q3 from './image/q3.jpg';
import q4 from './image/q4.jpg';
import q5 from './image/q5.jpg';

import s1 from './image/s1.jpg';
import s2 from './image/s2.jpg';
import s3 from './image/s3.jpg';
import s4 from './image/s4.jpg';
import s5 from './image/s5.jpg';

function App() {
  const data1 = [
    {
      name: '아이템1',
      src: i1,
      price: 4400,
    },
    {
      name: '아이템2',
      src: i2,
      price: 3400,
      hash: [{ tag: '간안지' }, { tag: '하입' }, { tag: '박수' }],
    },
    {
      name: '아이템3',
      src: i3,
      price: 44400,
    },
    {
      name: '아이템1',
      src: i4,
      price: 44200,
      hash: [{ tag: '멋짐' }, { tag: '힙' }],
    },
    {
      name: '아이템1',
      src: i5,
      price: 14400,
      hash: [{ tag: '재미' }, { tag: '숲속' }],
    },
  ];
  const data2 = [
    {
      name: '첫번째',
      src: s1,
      price: 4400,
    },
    {
      name: '두번째',
      src: s2,
      price: 3400,
      hash: [{ tag: '간안지' }, { tag: '하입' }, { tag: '박수' }],
    },
    {
      name: '세번째',
      src: s3,
      price: 44400,
    },
    {
      name: '네번째',
      src: s4,
      price: 44200,
      hash: [{ tag: '멋짐' }, { tag: '힙' }],
    },
    {
      name: '다섯째',
      src: s5,
      price: 14400,
      hash: [{ tag: '재미' }, { tag: '숲속' }],
    },
  ];
  const data3 = [
    {
      name: '드랍더',
      src: q1,
      price: 42400,
      hash: [{ tag: '멋짐' }, { tag: '힙' }, { tag: '감성' }, { tag: '인기있는' }, { tag: '웃긴' }],
    },
    {
      name: '비트',
      src: q2,
      price: 3100,
    },
    {
      name: 'TheGood',
      src: q3,
      price: 6400,
    },
    {
      name: 'Front',
      src: q4,
      price: 432200,
      hash: [{ tag: '멋짐' }, { tag: '힙' }],
    },
    {
      name: 'Back',
      src: q5,
      price: 14400,
      hash: [{ tag: '재미' }, { tag: '숲속' }],
    },
  ];

  const [type, setType] = useState(data1);

  return (
    <>
      <Header type={type} setType={setType} Type={type} data1={data1} data2={data2} data3={data3}/>
    </>
  );
}

export default App;


