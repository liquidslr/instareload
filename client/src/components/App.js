import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Profile';
import Adobe from './Adobe'
import Register from './Register';
import Login from './Login';
import { connect } from 'react-redux';
import * as actions from '../actions';



class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <div >
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/adobe" component={Adobe} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);
