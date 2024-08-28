import React from 'react';
import { data1, data2, data3 } from './data';
import './style.css';
import Map from '../Map';

const Clothes = (props) => {
  const data = [...data1, ...data2, ...data3];

  return (
    <div className="clothes-container">
      {data.map((x, i) => (
        <div key={i} className="clothes-item">
          <Map data={x} />
        </div>
      ))}
    </div>
  );
};

export default Clothes;