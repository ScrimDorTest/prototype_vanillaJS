import React from 'react';

const Detail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            alt={"shoes"+(props.i+1)}
            src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.a.title}</h4>
          <p>{props.a.content}</p>
          <p>{props.a.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;