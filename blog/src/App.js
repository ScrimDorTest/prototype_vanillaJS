import React from 'react';
import './App.css';
import Blog from './pages/blog';
import Shop from './pages/shop';
import DetailPage from './pages/detailPage';
import './bootstrap.min.css';

import { Link, Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from './components/appBar';

function App() {
  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Route exact path="/">
        <div style={{ textAlign: 'center' }}>
          메인페이지에여
          <a href="/blog">
            <h1>블로그로</h1>
          </a>
          <a href="/shop">
            <h1>쇼핑으로</h1>
          </a>
        </div>
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/detail">
        <DetailPage />
      </Route>
    </>
  );
}

export default App;
