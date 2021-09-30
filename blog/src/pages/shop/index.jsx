import React, { useState } from 'react';
import './styles.css';
import SimpleCard from '../../components/simpleCard';
import { Button, Grid } from '@material-ui/core';
import ItemList from '../../components/ItemList';
import axios from 'axios';

const Shop = (props) => {
  const sortList = () => {
    const newArray = [...props.shoes];
    newArray.sort(function (a, b) {
      return a.price - b.price;
    });
    props.shoesChange(newArray);
  };
  const [load, loadChange] = useState(false);
  var 로컬확인 = localStorage.getItem('watched');
  var 확인한상품 = JSON.parse(로컬확인);

  return (
    <div className="Shop">
      <div className="Content">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: 20 }}
        >
          <SimpleCard />
        </Grid>
        <div className="ItemList">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: 20 }}
          >
            {props.shoes.map((a, i) => {
              return <ItemList a={a} i={i} key={i}></ItemList>;
            })}
          </Grid>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button variant="contained" color="secondary" onClick={sortList}>
            정렬
          </Button>
          {load === true && <h2>로딩중...</h2>}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              loadChange(true);
              axios
                .get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  loadChange(false);
                  props.shoesChange([...props.shoes, ...result.data]);
                  props.stockChange([...props.stock, 10, 7, 8]);
                  console.log(확인한상품);
                })
                .catch(() => {
                  loadChange(false);
                  console.log('실패');
                });
            }}
          >
            더보기
          </Button>
        </div>
        {props.shoes.map((shoes, i) => {
          return (
            <p>
              {확인한상품 == null ? (
                localStorage.setItem('watched', JSON.stringify([]))
              ) : (
                <p>
                  {확인한상품.findIndex((v) => {
                    return v == shoes.id;
                  }) >= 0 ? (
                    <p>{shoes.title}</p>
                  ) : null}
                </p>
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
