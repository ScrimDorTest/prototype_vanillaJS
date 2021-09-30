import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';

const Cart = (props) => {
  return (
    <TableContainer sx={{ maxWidth: 1000 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">상품명</TableCell>
            <TableCell align="right">수량</TableCell>
            <TableCell align="right">변경</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.state.map((row, i) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.quan}</TableCell>
              <TableCell align="right">
                <button
                  onClick={() => {
                    props.dispatch({ type: '수량증가' });
                  }}
                >
                  {' '}
                  +{' '}
                </button>
                <button
                  onClick={() => {
                    props.dispatch({ type: '수량감소' });
                  }}
                >
                  {' '}
                  -{' '}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

function ReduxState(state) {
  return {
    state: state,
  };
}

export default connect(ReduxState)(Cart);
