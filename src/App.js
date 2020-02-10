import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// component imports 
import Home from "./components/home/Home.js";

console.log("key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <div>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
      
    )
  }

}

export default App;
