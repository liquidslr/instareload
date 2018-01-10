import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Profile';
import Register from './Register';
import Login from './Login';



class App extends Component {


  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
