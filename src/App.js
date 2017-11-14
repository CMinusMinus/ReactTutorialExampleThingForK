import React, { Component } from 'react';
import './App.css';
import KsApp from './KsApp';
import ShannonsApp from './ShannonsApp';

const Display = ({ hide, children }) => (
  <div style={{ display: hide && 'none' }}>{children}</div>
)

const App = () => (
  <div>
    <Display hide><KsApp /></Display>
    <Display><ShannonsApp /></Display>
  </div>
)

 export default App;
