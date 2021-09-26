import React, {useState}from 'react';
import './App.css';
import './bootstrap.min.css';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Detail from './components/Detail';
import Cart from './components/Cart';

import data from './pages/Shop/data';

import { Link, Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from './components/appBar';

function App() {
  const [shoes, shoesChange] = useState(data);
  const [stock, stockChange] = useState([10,11,12]);

  return (
    <>
      <PrimarySearchAppBar />

      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/shop">
          <Shop shoes={shoes} shoesChange={shoesChange} stock={stock} stockChange={stockChange} />
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} stock={stock} stockChange={stockChange} />
        </Route>
        <Route path="/:id">
          <h1>not found 404</h1>
        </Route>
        <Route path="/">
          <h1 style={{ textAlign: 'center' }}>
            메인페이지에여
          </h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
