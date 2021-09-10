import React from 'react';
import './styles.css';
import SimpleCard from '../../components/simpleCard';
import { Button, Grid } from '@material-ui/core';
import ItemList from '../../components/ItemList';

const Shop = (props) => {

  const sortList = () => {
    const newArray = [...props.shoes];
    newArray.sort(function(a,b){ return a.price -b.price;});
    props.shoesChange(newArray);
  }

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
            {
              props.shoes.map((a,i)=>{
                return(
                  <ItemList a={a} i={i} key={i}></ItemList>
                )
              })
            }
          </Grid>
        </div>
        <Button onClick={sortList}>정렬</Button>
      </div>
    </div>
  );
};

export default Shop;
