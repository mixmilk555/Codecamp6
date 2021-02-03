import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'  //1
import reducer from './reducer' //3
import { Provider } from 'react-redux'//4 // Provider ตัวส่ง store กลางไปให้ component ต่างๆ ผ่าน props

const store = createStore(reducer)  //2

ReactDOM.render(  //ส่ง store กลาง ของ redux เป็น props โดย Provider ให้ child component ใน react
  <Provider store={store}>  
    <App />
  </Provider>,
  document.getElementById('root')
);  // App เป็น child เพราะใน redux มี parent ตัวเดียวคือ store ที่เหลือเป็น child

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

