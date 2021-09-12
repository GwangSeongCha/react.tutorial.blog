import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(true);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      
      {
        글제목.map(function(글){
          return (
          <div className="list">
            <h3>{ 글 } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
            <p>2월 18일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      <button onClick={ ()=>{modal변경(!modal)} }>열고닫기</button>

      {
        modal === true
        ? <Modal 글제목={글제목} ></Modal>
        : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      <p> { props.글제목[0] } </p>
      <p> { props.글제목[1] }</p>
      <p> { props.글제목[2] }</p>
    </div>
  )
}

export default App;
