import PropsTest from './components/PropsTest';
import './index.css';
import React, { useState } from 'react';
import apple from '../src/image/apple.jpg';
import grapes from '../src/image/grapes.jpg';
import peaches from '../src/image/peaches.jpg';

function App() {
  // const animals = ['dog', 'cat', 'rabbit'];
  // const newAnimals = animals.filter((animal) => {
  //   return animal.includes('a');
  // });
  // console.log(newAnimals, 'newData');
  
  
  // const list = ['a', 'b', 'c', 'd', 'e'];
  // const listData = [
  //   {
  //     id: 0,
  //     name: '철수',
  //     age: 7,
  //     like: ['농구', '배구', '축구', '야구'],
  //   },
  //   {
  //     id: 1,
  //     name: '맹구',
  //     age: 6,
  //     like: ['배구', '축구', '야구'],
  //   },
  //   {
  //     id: 2,
  //     name: '짱구',
  //     age: 5,
  //     like: ['농구', '축구', '야구'],
  //   },
  //   {
  //     id: 3,
  //     name: '훈이',
  //     age: 4,
  //   },
  // ];

  // return (
  // <div>
  //   {listData.map((txt, id) => {
  //     return (
  //       <div style={{ marginBottom: 40 }} key={id + 'listData'}>
  //         <div>ID : {txt.id}</div>
  //         <div>이름 : {txt.name}</div>
  //         <div>나이 : {txt.age}</div>
  //         <div>주소 : {id}</div>
  //         <div>
  //           {txt.like ? (
  //             <div>
  //               취미 :
  //               {txt.like.map((x, i) => {
  //                 return x + ' ';
  //               })}
  //             </div>
  //           ) : (
  //             <></>
  //           )}
  //         </div>
  //       </div>
  //     );
  //   })}
  //   ;
  // </div>
  // )

  
  const fruits = {
    apple: {name: '사과', src: apple},
    grapes: {name: '포도', src: grapes},
    peaches: {name: '복숭아', src: peaches}
  };

  const bks ={
    black : {name : '검정', color :'black'},
    yellow : {name : '노랑', color :'yellow'},
    green : {name : '초록', color :'green'},
    white : {name : '흰색', color :'white'},
  }

  const colors = {
    white : {name : '흰색', color: 'white'},
    black : {name : '검정', color : 'black'},
  }

  const [fruit, setFruit] = useState(fruits.apple);
  const [bk, setBK] = useState(bks.black);
  const [color, setColor] = useState(colors.white);
  const [content, setContent] = useState('apple');

  return (
    <>
      <PropsTest
        fruit={fruit}
        bk={bk}
        bks = {bks}
        colors = {colors}
        color={color}
        content={content}
        fruits={fruits}
        setFruit={setFruit}
        setBK={setBK}
        setColor={setColor}
        setContent={setContent}
      />
    </>
  );
  
}

export default App;
