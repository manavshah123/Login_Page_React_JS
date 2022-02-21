
import './App.css';
import Button from './button';
import Inputtext from './textbox';
import Lottie from 'lottie-web';
import React,{useEffect, useRef} from 'react';
import logo from './image/animation.gif'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <p>It's my first react app</p>
        <p>Login</p>
        <img src={logo} alt="loging" width="300" height="300"></img>        
        <div><Inputtext title="Username"></Inputtext></div>
        <div><Inputtext title="Email"></Inputtext></div>
        <div><Inputtext title="Password"></Inputtext></div>
        <div><Inputtext title="Confirm Password"></Inputtext></div>
        <Button title="Submit"></Button>
        <Button title="Signup"></Button>
        </div>
      
      </header>
    </div>
  );
}

export default App;
