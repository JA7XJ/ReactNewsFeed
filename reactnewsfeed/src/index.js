import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'firebase/firestore';
import 'firebase/auth';
import { FirebaseAppProvider } from 'reactfire';;

const firebaseConfig = {
  apiKey: "AIzaSyAyWX3QiMi67bVysbE5yUrO84In6B3_r8s",
  authDomain: "reactnewsfeed-473b6.firebaseapp.com",
  projectId: "reactnewsfeed-473b6",
  storageBucket: "reactnewsfeed-473b6.appspot.com",
  messagingSenderId: "1022484293898",
  appId: "1:1022484293898:web:4b65c03950b55df17532f3",
  measurementId: "G-LY35HS0P1P"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider  firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
