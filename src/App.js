import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import {Button} from "react-bootstrap";
import CatContainer from "./components/catcontainer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CatContainer />
      </div>
    );
  }
}

export default App;
