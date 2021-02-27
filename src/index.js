import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamurajJSApp from './App';


// addPost('What is your name?');

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello";
// document.querySelector("body").appendChild(h1);

// React.createElement("h1");

ReactDOM.render(
  <SamurajJSApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
