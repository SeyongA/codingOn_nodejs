import React from 'react';

const Map = ({ data }) => {
  return (
    <div>
      <img style={{ width: 150, height: 200 }} src={data.src} alt={data.name} />
      <p>상품명 : {data.name}</p>
      <p>가격 : {data.price}</p>
      {data.hash?.map((a, b) => (
        <div key={b}>{a.tag}</div>
      ))}
    </div>
  );
};

export default Map;
