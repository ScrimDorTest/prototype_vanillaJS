import React, { useState } from 'react';
import Detail from '../components/detail';
import data from './shop/data';

const DetailPage = () => {
  const [shoes, shoesChange] = useState(data);

  return (
    <div>
      {shoes.map((a, i) => {
        return <Detail a={a} i={i}></Detail>;
      })}
    </div>
  );
};

export default DetailPage;
