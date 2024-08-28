import React, { useRef, useState } from 'react';
import { Button, Input } from 'antd';

const RefExam = (props) => {
  const [data, setData] = useState([]);
  const userRef = useRef(null);
  const titleRef = useRef(null);
  const dateRef = useRef(null);

  const clickBtn = () => {
    const user = userRef.current.value;
    const title = titleRef.current.value;
    const date = dateRef.current.value;
    if (user !== '' && title !== '' && date !== '') {
      setData((prevData) => [...prevData, { user, title, date }]);
      userRef.current.value = '';
      titleRef.current.value = '';
      dateRef.current.value = '';
    } else {
      alert('빈칸있음');
    }
  };

  return (
    <>
      <div>
        작성자:
        <Input ref={userRef} />
        제목:
        <Input ref={titleRef} />
        작성일시:
        <Input ref={dateRef} />
        <Button onClick={clickBtn}>작성</Button>
      </div>

      {data.map((x, i) => (
        <div key={x.user + i}>
          이름 : {x.user} 제목 : {x.title} 날짜 : {x.date}
        </div>
      ))}
    </>
  );
};

export default RefExam;
