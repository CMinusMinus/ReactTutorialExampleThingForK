import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MyNewComponent = function(props) {
  return (<div>{props.message}</div>);
};

const Title = (props) => (<div style={{
  fontWeight: 'bold', fontSize: '300px', fontStyle: 'italics', color: '#FF5579'
}}>{props.children}</div>)
 
class App extends Component {
  // constructors are for initializing state, and binding functions
  constructor(props) {
    super(props); //boilerplate (needed for all class components that have state)
    
    // initialize the state
    this.state = {
      numClicks: 0, // the number of times the button has been clicked
      textValue: '' // the current input value in the input tag
    };

    // boilerplate
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // for button input handling
  handleClick(e) {
    const newNumClicks = this.state.numClicks; // save state
    this.setState({ numClicks: newNumClicks + 1 }); // setState to update the state which triggers a rerender of the page
  }

  // for text input event handling
  handleInput(e) {
    this.setState({ textValue: e.target.value }); // keep the current input value up to date
  }

  render() {
    return (
      <div className="App">
        {/* This is an example of children (see const Title = (props) =>) */}
        <Title>THIS IS MY TITLE</Title>
        {/* basic props stuff (see const MyComponent = (props) =>) */}
        <MyNewComponent message="Sup K" />
        {/* button input (see handleClick, this.state) */}
        <div style={{ backgroundColor: 'blue', color: 'white', height: '100px', width: '200px', marginBottom: '100px' }} onClick={this.handleClick}>Click Me!</div> {/* the button to click */}
        {/* Note: the style element takes in an object that specifies the CSS of the tag */}
        <div>Clicked {this.state.numClicks} times!</div> {/* displays the number of times user has clicked the button */}

        {/* text input (see handleInput, this.state) */}
        <input type="text" value={this.state.textValue} onChange={this.handleInput} />
        <div>You said: {this.state.textValue}</div>
      </div>
    );
  }
}

export default App;
