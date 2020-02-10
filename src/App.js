import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
          <div>
            <h1>Home</h1>
          </div>
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
