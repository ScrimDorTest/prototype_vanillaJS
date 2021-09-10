import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const Detail = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const b = props.shoes.find(function (a) {
    return a.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            alt={'shoes' + (b.id + 1)}
            src={
              'https://codingapple1.github.io/shop/shoes' + (b.id + 1) + '.jpg'
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{b.title}</h4>
          <p>{b.content}</p>
          <p>{b.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
