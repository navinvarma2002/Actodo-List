import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));


function Home(){

  return(<h1>Home</h1>)
}

function About(){

  return(<h1>About</h1>)
}



root.render(
  <div>
    <App/>
  </div>
)

