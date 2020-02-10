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
