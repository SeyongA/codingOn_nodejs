import { Button } from 'antd';
import { useState } from 'react';

const Radom = (props) => {
  const [data, setData] = useState();

  const dataU = ['홍길동', '김춘삼', '이춘향', '이석봉', '손석구'];
  const RandomFunc = () => {
    const a = Math.floor(Math.random()*5);
    setData(dataU[a]);
    console.log(a);
    
  };

  return (
    <>
      <Button onClick={RandomFunc}>뽑기</Button>
      <p>{data}</p>
    </>
  );
};
export default Radom;
