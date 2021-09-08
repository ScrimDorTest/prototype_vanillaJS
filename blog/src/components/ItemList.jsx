import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ItemList = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} style={{ margin: 20 }} key={props.i}>
      <a
        href='/detail'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <img
          alt={'shoes' + (props.i + 1)}
          src={
            'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
          }
          style={{ width: 'inherit', maxWidth: '300px', height: 'auto' }}
        />
        <h4>{props.a.title}</h4>
        <p>
          ${props.a.price}
          <br></br>
          {props.a.content}
        </p>
      </a>
    </Paper>
  );
};

export default ItemList;
