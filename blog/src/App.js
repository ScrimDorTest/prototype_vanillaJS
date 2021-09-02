import React, { useState } from 'react';
import './App.css';
import Modal from './components/modal';

function App() {
  const [title, titleChange] = useState([
    '남자 코트 추천',
    '나는 전설이다',
    '우효오오옷',
  ]);
  const [thumb, thumbChange] = useState([0,0,0]);
  const [modal, modalChange] = useState(false);
  const [select, selectChange] = useState(0);
  const [write, writeChange] = useState('');

  const sortList = () => {
    var newArray = [...title];
    newArray.sort();
    titleChange(newArray);
  };
  const addList = () => {
    
    var newArray = [...title];
    newArray.push(write);
    titleChange(newArray);
    
    var newArray2 = [...thumb];
    newArray2.push(0);
    thumbChange(newArray2);
  }
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>개발 Blog</h4>
      </div>
      <button onClick={sortList}>정렬</button>
      
      {
      title.map((i,a) => {
        const updateArray = () => {
          let newArray = [...thumb];
          newArray[a] = newArray[a] + 1;
          thumbChange(newArray);
        };
        return (
          <div className="list" key={a}>
            <h3><span onClick={()=>{selectChange(a); modalChange(select === a ? !modal :modal);}}>{i}</span><span onClick={()=>{updateArray(i)}}>👍{thumb[a]}</span></h3>
            <p>2월 19일 발행</p>
          </div>
        );
      })
      }
      
      <div className="publish">
        <input onChange={ (e)=>{writeChange(e.target.value)} } />
        <button onClick={ () => {addList()} }>저장</button>
      </div>

      <button onClick={() => {modalChange(!modal)}}>모달 토글</button>

      {modal === true ? <Modal title={title} select={select}></Modal> : null}
    </div>
  );
}

export default App;
