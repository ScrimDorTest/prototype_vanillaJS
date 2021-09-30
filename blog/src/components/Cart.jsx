import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect, useDispatch, useSelector } from 'react-redux';

const Cart = (props) => {
  let [currentTab, setTab] = useState('탭1');

  let state = useSelector((state) => state.reducer1);
  let alertState = useSelector((state) => state.reducer2);
  let dispatch = useDispatch();

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
            {state.map((row, i) => (
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
                      dispatch({ type: '수량증가', 임시: row });
                    }}
                  >
                    {' '}
                    +{' '}
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: '수량감소', 임시: row });
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
      {alertState === true && (
        <div className="my-alert">
          <p>지금 구매하시면 신규할인 90%</p>
          <button
            onClick={() => {
              dispatch({ type: '닫기' });
            }}
          >
            닫기
          </button>
        </div>
      )}
      <div>
        <button onClick={()=>{setTab('탭1')}}>탭1</button>
        <button onClick={()=>{setTab('탭2')}}>탭2</button>
        <button onClick={()=>{setTab('탭3')}}>탭3</button>
        {
          {
            탭1: <p>1번탭입니다</p>,
            탭2: <p>2번탭입니다</p>,
            탭3: <p>3번탭입니다</p>,
          }[currentTab]
        }
      </div>
    </div>
  );
};

export default Cart;
