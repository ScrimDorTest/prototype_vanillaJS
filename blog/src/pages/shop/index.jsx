import React, { useState } from 'react';
import './styles.css';
import SimpleCard from '../../components/simpleCard';
import { Grid } from '@material-ui/core';
import ItemList from '../../components/ItemList';
import data from './data';

const Shop = () => {
  
  const [shoes, shoesChange] = useState(data);

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
              shoes.map((a,i)=>{
                return(
                  <ItemList a={a} i={i}></ItemList>
                )
              })
            }
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Shop;
