import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {firebaseConnect} from './firebaseConnect';

import firebase from "firebase";



class App extends Component {
  //Hàm thêm dữ liệu dùng push
  them = () =>{
    var connectdata=firebase.database().ref('user/');
    connectdata.push({
      name: "Ku tân",
      tel:345633333
    });      
    alert('Thêm dữ liệu thành công');
  }



  
  xoa = (id) =>{
    var connectdata=firebase.database().ref('user/');
    connectdata.child(id).remove();
    alert('đã xóa dữ liệu co id là: ' + id);
  }

  render() {
  console.log(firebaseConnect);  










  //cập nhật dữ liệu
  var data=firebase.database().ref('user/user1');
  data.set({
    name: "Long",
    tel: 12322222222,
    diachi:"123 pct aa"
  })
  // Thêm dữ liệu dùng set
  var data=firebase.database().ref('user/user3');
  data.set({
    name: "Long phan đù abc dd",
    id: 2,
    tel: 123
  })
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() =>this.them()}>Thêm dữ liệu dùng push</button>
           
      <button onClick={() =>this.xoa('-NCm1HspsCGGlpBl8e_4')}>Xóa dữ liệu</button>
    </div>
  );
}
}
export default App;
