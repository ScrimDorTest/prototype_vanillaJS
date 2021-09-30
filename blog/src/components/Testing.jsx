import React, { memo, useEffect, useState } from 'react';

const Testing = (props) => {
  return (
    <div>
      <Child1 이름={props.이름} />
      <Child2 나이={props.나이} />
    </div>
  );
};

const Child1 = () => {
  useEffect(() => {
    console.log('랜더링됨1');
  });
  return <div>1111</div>;
};
let Child2 = memo(function () {
  useEffect(() => {
    console.log('랜더링됨2');
  });
  return <div>2222</div>;
});

export default Testing;
