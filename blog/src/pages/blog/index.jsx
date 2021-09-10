import React, { useState } from 'react';
import Modal from '../../components/modal';
import './style.css'

function Blog() {
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
    newArray.unshift(write);
    titleChange(newArray);
    
    var newArray2 = [...thumb];
    newArray2.unshift(0);
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
        const thumbsUp = () => {
          let newArray = [...thumb];
          newArray[a] = newArray[a] + 1;
          thumbChange(newArray);
        };
        return (
          <div className="list" key={a}>
            <h3>
              <span onClick={()=>{modalChange(select === a ? !modal :modal ? modal : !modal); selectChange(a); }}>{i}</span>
              {/* modal이 false일 때 다른 select 값을 고르면 modal값이 true로 바뀌지 않고 select값만 바뀌는 것을 방지하기 위한 코드 */}
              <span onClick={()=>{thumbsUp(i)}}>👍{thumb[a]}</span></h3>
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

export default Blog;