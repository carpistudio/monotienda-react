import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEpq-Hoz3r-hIPUVRy661dIZu81u2Ig14",
  authDomain: "monotienda-react.firebaseapp.com",
  projectId: "monotienda-react",
  storageBucket: "monotienda-react.appspot.com",
  messagingSenderId: "340068785170",
  appId: "1:340068785170:web:21fd2c3bdbac877b814ccb"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
