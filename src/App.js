//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';

function App() {
  return (
    <div>
      <div >
        {/*  <header className="App-header">
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
         </header>*/}



        Phone Directory </div>
      <div>
        <button>Add</button>
      </div>
      <div><span>Name</span><span>Phone</span>
      </div>
      <label htmlFor='name'>Name: </label>
      <input id='name' type="text" placeholder='Type Here' defaultValue='Shilpa'/>
    </div>
  );
}

export default App;
