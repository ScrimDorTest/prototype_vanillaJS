import React, {useState}from 'react';
import './App.css';
import Blog from './pages/blog';
import Shop from './pages/shop';
import Detail from './components/detail';
import './bootstrap.min.css';
import data from './pages/shop/data';

import { Link, Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from './components/appBar';

function App() {
  const [shoes, shoesChange] = useState(data);

  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>

      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/shop">
          <Shop shoes={shoes} shoesChange={shoesChange} />
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
        <Route path={"/:"+shoes.id}>
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
