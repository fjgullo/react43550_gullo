import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './context/cartContext';
import { initializeApp } from "firebase/app";

//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_bgXV_Sxpi9NY6kvuSQkUVfTYH4a8MiU",
  authDomain: "react43550-gullo.firebaseapp.com",
  projectId: "react43550-gullo",
  storageBucket: "react43550-gullo.appspot.com",
  messagingSenderId: "1038859608381",
  appId: "1:1038859608381:web:3d75eb4362ba1f1c682554"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
