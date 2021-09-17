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
          {load === true ? <h2>로딩중...</h2> : null}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
<<<<<<< Updated upstream
              axios
                .get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  props.shoesChange([...props.shoes, ...result.data]);
                })
                .catch(() => {
=======
              loadChange(true);
              axios
                .get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  loadChange(false);
                  props.shoesChange([...props.shoes, ...result.data]);
                })
                .catch(() => {
                  loadChange(false);
>>>>>>> Stashed changes
                  console.log('실패');
                });
            }}
          >
            더보기
          </Button>
          
        </div>
      </div>
    </div>
  );
};

export default Shop;
