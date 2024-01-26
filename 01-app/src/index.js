import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function add(a, b){
//   return a + b;
// }

// function MyComponent(){
//   const name = "Pankaj Kumar";
//   return <h2>Hello, {name}</h2>
// }

// function MyComponent(){
//   return <h3>Sum is: {add(2, 4)}</h3>;
// }

function MyComponent(){
  const link = "https://google.com";
  return <a href={link}>Click Me</a>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyComponent />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
