import PropsTest from './components/PropsTest';
import './index.css';
import React, { useState } from 'react';
import apple from '../src/image/apple.jpg';
import grapes from '../src/image/grapes.jpg';
import peaches from '../src/image/peaches.jpg';
import wwww from '../src/image/wwww.png';

// import { Select } from 'antd';

function App() {
  // ====== 버튼으로 메시지 바꾸기 ======
  // const [message, setMessage] = useState('');
  // const onClickEnter = () => {
  //   setMessage('안녕하세요~');
  // };
  // const onClickLeave = () => {
  //   setMessage('안녕히가세요~');
  // };
  // return (
  //   <div>
  //     <button onClick={onClickEnter}>입장</button>
  //     <button onClick={onClickLeave}>퇴장</button>
  //     <div>{message}</div>
  //   </div>
  // );

  // ====== select로 배경색 바꾸기 (실패)=====
  // const [color, setColor] = useState("backgroundColor: red");
  // const changeRed = () => {
  //   setColor({ backgroundColor: 'red' });
  // };
  // const changeBlue = () => {
  //   setColor({ backgroundColor: 'blue' });
  // };
  // const changeGreen = () => {
  //   setColor({ backgroundColor: 'green' });
  // };

  // return (
  //   <>
  //     <select>
  //       <option onChange={changeRed}>빨간색</option>
  //       <option onChange={changeBlue}>파란색</option>
  //       <option onChange={changeGreen}>초록색</option>
  //     </select>
  //     <div style = {{backgroundColor: green }}></div>
  //   </>
  // );

  // ====== 버튼으로 숫자 + - 하기 =====
  // const [number, setNumber] = useState(0);
  // const Count = () => {
  //   setNumber(number + 1);
  // };
  // const Countm = () => {
  //   setNumber(number - 1);
  // };
  // return (
  //   <>
  //   {/* <button onClick={Count}>+</button> */}
  //   <PropsTest number = {number} Count = {Count} Countm = {Countm}/>
  //   {/* <button onClick={Countm}>-</button> */}
  //   </>
  // );

  // 이미지
  // const [number, setNumber] = useState(0);
  // return (
  //   <>
  //     <img style = {{width : 100, height : 100}} src = {dog} />
  //     <PropsTest number={number} />
  //   </>
  // );

  // 이미지 클릭으로 이미지 바꾸기
  const [src, setSrc] = useState(wwww); //usestate src
  const [price, setPrice] = useState(2000); //usestate price
  const [number, setNumber] = useState(1); //usestate count

  // 카운트 추가 
  const Count = () => {
    setNumber(number + 1);
    setPrice(2000);
  };

  // 카운트 감소(1이하로 내려가지 않도록 처리)
  const Countm = () => {
    if (number == 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };

  //배열안에 src값을 images에 할당
  const images = [wwww, apple, grapes, peaches];

  return (
    <>
      <PropsTest
        number={number} 
        Count={Count}
        Countm={Countm}
        Images={images}
        src={src}
        price={price}
        Number={number}
        setSrc ={setSrc}
      />
    </>
  );
}

export default App;
