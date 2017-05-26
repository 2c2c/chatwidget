import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChatWidget from "./components/ChatWidget.js";
import Login from "./components/Login.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatWidget />
      </div>
    );
  }
}

export default App;
