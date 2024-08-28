import React, { useState } from 'react';
import { Input, Select } from 'antd';
import { data } from './data';
import './style.css';

const AppleSelect = (props) => {
  const [fruit, setFruit] = useState(data.fruits.apple.value);
  const [BK, setBK] = useState('black');
  const [FC, setFC] = useState('white');
  const [text, setText] = useState('글자');

  const fruitOptions = Object.keys(data.fruits).map((key) => ({
    label: data.fruits[key].label,
    value: data.fruits[key].value,
  }));

  const colorOptions = Object.keys(data.colors).map((key) => ({
    label: data.colors[key].label,
    value: key,
  }));

  return (
    <div className="apple-select-container">
      <div className="apple-select-label">
        과일 :<Select onChange={setFruit} options={fruitOptions} defaultValue={fruit} />
      </div>

      <div className="apple-select-label">
        배경색 :
        <Select onChange={setBK} options={colorOptions} defaultValue={BK} />
      </div>
      <div className="apple-select-label">
        글자색 :<Select onChange={setFC} options={colorOptions} defaultValue={FC} />
      </div>

      <div className="apple-select-label">
        내용 : <Input onChange={(e) => setText(e.target.value)} defaultValue={text} />
      </div>

      <div className="apple-image-container">
        <img src={fruit} alt="Selected Fruit" className="apple-image"></img>
      </div>
      <div className="apple-text-display" style={{ background: BK, color: FC }}>
        {text}
      </div>
    </div>
  );
};

export default AppleSelect;
