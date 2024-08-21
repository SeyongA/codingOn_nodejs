import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

const App = () => {
  const [number, setNumber] = useState([]);

  const changeNumberState = () => {
    const arr = [];
    while (arr.length < 6) {
      const RandomNum = Math.floor(Math.random() * 45) + 1;
      if (!arr.includes(RandomNum)) {
        arr.push(RandomNum);
      }
    }
    setNumber(arr);
  };

  return (
    <>
      <button onClick={changeNumberState} > 추첨</button>
      {<MyComponent number={number} />}
    </>
  );
};

export default App;
