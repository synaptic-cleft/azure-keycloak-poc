import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Public from './components/Public';
import PublicWithAPI from './components/PublicWithAPI';
import './App.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li><Link to="/">public component</Link></li>
            <li><Link to="/api">API component</Link></li>
          </ul>
          <Route exact path="/" component={Public} />
          <Route exact path="/api" component={PublicWithAPI} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;