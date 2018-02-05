import { showSwipe } from './api';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    showSwipe((err, messageData) => {
      this.setState({ 
        greeting: messageData.greeting,
        student: messageData.student
      })
      setTimeout(() => {
        this.setState({ 
          greeting: '',
          student: ''
        })
      }, 5000)
    });
  }
  
  state = {
    greeting: '',
    student: ''
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
          <div className="App">
          <h1 className="App-intro">
          {`${this.state.greeting} ${this.state.student}`}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
