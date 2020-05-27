import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Public from './components/Public';
import PublicWithAPI from './components/PublicWithAPI';
import Private from './components/Private';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li><Link to="/">Public</Link></li>
            <li><Link to="/api">API gets called</Link></li>
            <li><Link to="/private">Private</Link></li>
          </ul>
          <Route exact path="/api" component={PublicWithAPI} />
          <Route exact path="/private" component={Private} />
          <Route path="/" component={Public} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;