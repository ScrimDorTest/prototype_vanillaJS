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
    <div>
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
      {props.alertState === true ? (
        <div className="my-alert">
          <p>지금 구매하시면 신규할인 90%</p>
          <button
            onClick={() => {
              props.dispatch({ type: '닫기' });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
};

function ReduxState(state) {
  console.log(state);
  return {
    state: state.reducer1,
    alertState: state.reducer2,
  };
}

export default connect(ReduxState)(Cart);
