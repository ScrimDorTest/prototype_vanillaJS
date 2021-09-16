import React from 'react';

const Modal = (props) => {
  return (
    <div className="Modal">
      <h2>{props.title[props.select]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default Modal;