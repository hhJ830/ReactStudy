/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [좋아요수, 좋아요변경] = useState([0,0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  function 함수(){
    console.log(1);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color:'green', fontSize:'16px'}}>블로그임</h4>
      </div>
      <button onClick={()=>{
        let copy1 = [...글제목.sort()];
        글제목변경(copy1);
        }}>가나다순정렬</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      
      {
        글제목.map(function(a, i){
          
          return <div className='list' key={i}>
            
          <h4 onClick={()=>{ 
            setModal(true);
            setTitle(i);
            }}>{ 글제목[i] }
          
          <span className='hover' onClick={(e)=>{ 
            let likecopy = [...좋아요수];
            likecopy[i] = likecopy[i]+1;
            좋아요변경(likecopy);
            e.stopPropagation();
            }}>❤️
            </span> {좋아요수[i]}
            
            </h4>

          
          <p>2월 17일 발행 
            <span className='hover' onClick={(e)=>{
              let copy5 = [...글제목];

              copy5.splice(i,1);
              글제목변경(copy5);
              e.stopPropagation();
            }}>🗑️</span></p>
          
        </div>
        })           
      }

      <input type="text" onChange={(e)=> {
        입력값변경(e.target.value)
        }}></input>
      <button onClick={()=>{
        let copy4 = [...글제목];
        copy4.push(입력값);
        글제목변경(copy4);
      
      }}>글등록</button>
      <Modal2></Modal2>
      {
        modal==true ? <Modal title = { title } 글제목변경={글제목변경} 글제목={글제목}/> : null
      }
      
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
        <h4>{ props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copy3 = [...props.글제목];
          copy3[0] = "여자 코트 추천";
          props.글제목변경(copy3);
        }}>글수정</button>
      </div>
  )
}

class Modal2 extends React.Component{
  constructor(){
    super();
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 { this.state.age }
        <button onClick={()=>{
          this.setState({age:21})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;
