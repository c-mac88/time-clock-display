import { showSwipe } from './api';
import React, { Component } from 'react';
import './App.css';
import logo from './logo_white.png';

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
          greeting: 'HELLO! ',
          student: 'Please check in'
        })
      }, 5000)
    });
  }

  state = {
    greeting: 'HELLO! ',
    student: 'Please check in'
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} alt="poop" width="500px"/>        
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
