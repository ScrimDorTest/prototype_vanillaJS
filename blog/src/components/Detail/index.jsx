import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CustomTabs from '../CustomTabs';
import { CSSTransition } from 'react-transition-group';
import './styles.scss';
import { connect } from 'react-redux';

const Box = styled.div`
  padding: 20px;
  background-color: black;
  text-align: center;
  color: ${(props) => props.color};
`;

const Detail = (props) => {
  const [alert, alertChange] = useState(true);
  const [tab, setTab] = useState(2);
  const [trans, setTrans] = useState(false);

  useEffect(() => {
    console.log('detail 켜짐');
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      alertChange(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const { id } = useParams();
  const history = useHistory();
  const b = props.shoes.find(function (a) {
    return a.id == id;
  });

  return (
    <div className="container">
      <Box className="white">Detail</Box>
      {alert === true ? (
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다!</p>
        </div>
      ) : null}
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
          <Info stock={props.stock} b={b}></Info>
          <button
            className="btn btn-success"
            onClick={() => {
              const newArray = [...props.stock];
              newArray[b.id] = newArray[b.id] - 1;
              props.stockChange(newArray);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              props.dispatch({
                type: '장바구니',
                payload: {
                  id: b.id + 3,
                  name: b.title,
                  quan: props.stock[b.id],
                },
              });
              history.push('/cart');
            }}
          >
            장바구니
          </button>
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

      <CustomTabs setTab={setTab} setTrans={setTrans} />
      <CSSTransition in={trans} classNames="wow" timeout={500}>
        <TabContent tab={tab} setTrans={setTrans} />
      </CSSTransition>
    </div>
  );
};

const TabContent = (props) => {
  useEffect(() => {
    props.setTrans(true);
  });

  return (
    <>
      {props.tab === 0 ? <div>1번 탭이에요!</div> : null}
      {props.tab === 1 ? <div>2번 탭이에요!</div> : null}
      {props.tab === 2 ? <div>3번 탭이에요!</div> : null}
    </>
  );
};

const Info = (props) => {
  return <p>재고 : {props.stock[props.b.id]} </p>;
};

function ReduxState(state) {
  console.log(state);
  return {
    cartState: state.reducer1,
    alertState: state.reducer2,
  };
}

export default connect(ReduxState)(Detail);
