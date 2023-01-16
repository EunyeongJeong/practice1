/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit'

import { useState } from 'react';
import './App.css';

function App() {

  let movie = '스파이더맨2'; // 대충 서버에서 가져온 실제 데이터, 자료 잠깐 저장할 땐 변수
  // 리액트에서는 자료 잠깐 저장할 땐 state써도 된다.(var, let, const같은?)
  let [글제목, 글제목변경] = useState(['다 재밌는 영화 추천', '가 무서운 영화 추천', '나 슬픈 영화 추천']); // a: state에 보관했던 자료나옴, b: state 변경 도와주는 함수 -> JS의 Destructuring문법
  // 일반변수선언과 state의 차이점은 state는 state쓰던 html은 자동재랜더링을 하지만 일반변수는 갑자기 변경되면 html에 자동으로 반영안됨
  // 그런데 나는 왜 되는 거지?.. 뭔가 잘못이해하고있는건가..
  // let [logo, setLogo] = useState('Netflix 분위기 나는 영화 평점사이트'); // 현재사용은 쓸데없어 보임, 굳이 귀찮게 만들이유가 없음

  let [좋아요, 좋아요변경] = useState(0); // 좋아요변경(state변경함수,새로운state )을 써야 html 재랜더링이 잘됨.

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color:'red', fontSize:'20px'}}>영화 평점 사이트</h4>
      </div>

      {/* array/object 다룰때 원본은 보존하는게 좋음 */}
      <button onClick={ () => {
        // 글제목[0] = '재미없는 영화 추천'; // 영구적으로 수정해버림
        let copy = [...글제목]; // 카피본을 만든다
        copy[0] = '노잼영화추천';
        글제목변경(copy);} 
        }>글수정</button>

      <button onClick={()=>{
        let copy2 = [...글제목].sort();
        글제목변경(copy2);
      }}>글제목 가나다순 정렬기능</button>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ () => {좋아요변경( 좋아요+1 )} }>👍</span> {좋아요} </h4>
        <p>2월 17일 개봉</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 개봉</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 개봉</p>
      </div>
      <div className='list'>
        <h4>{movie}</h4>
        <p>2월 17일 개봉</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal(){  // 다른 function 바깥에 만들어야 한다. 영어 대문자로 시작해야한다.   // 현재 Modal은 컴포넌트라고 부른다.
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
  )
}

export default App;
