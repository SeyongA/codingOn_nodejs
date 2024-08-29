import { useState } from 'react';
import { MainPageStyled } from './styled';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import apple from '../../assets/image/apple.jpg'

const MainPage = () => {
  const [number, setNumber] = useState(0);
  const router = useRouter();
  return (
    <MainPageStyled>
      <img src={apple.src} alt="" />
      <div className="mainTitle">안녕하세요 메인입니다.</div>
      <div>{number}</div>
      <Button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </Button>
      <Button
        onClick={() => {
          router.push(`/company/${number}`);
        }}
      >
        이동
      </Button>
    </MainPageStyled>
  );
};

export default MainPage;
