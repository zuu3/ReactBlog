/* eslint-disable */
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, set입력값] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        글제목.map(function(a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); setTitle(i); }}>{ 글제목[i] }
                <span onClick={() => {
                  let copy = [...따봉];
                  copy[i]+=1;
                  따봉변경(copy);
                }}>👍</span> {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {set입력값(e.target.value)}} />
      <button onClick={(e) => {
        if(입력값.trim()) {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        } else {
          console.log("값 입력바람");
        }
      }}>글발행</button>

      {
        modal == true ? <Modal title={title} 글제목={글제목}/> : null
      }
      <Modal2 />
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  );
}

// 옛 리액트 문법 class로 컴포넌트 만들기
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //오브젝트 형식으로
      name: 'kim',
      age: 20
    }
  }

  render() {
    return (
      <div>안녕 {this.state.age}
        <button onClick={() => {this.setState({age : 21})}}>ㅇㅇ</button>
      </div>
    );
  }
}

export default App;