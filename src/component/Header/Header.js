import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './SignIn'
import SignUp from './SignUp'


class Header extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row navbar navbar-light bg-light ">
            <div className="col-md-4">
            <ul class=" row navbar-nav">
      <li class="col-sm-6  nav-item active">
        
        <Link to="/SignIn" >
                    SignIn
                   </Link>           
                </li>
                <li class="col-sm-6  nav-item active">               
                  <Link to="/SignUp" >
                    SignUp
                  </Link>
                 
                </li>
              </ul>
            </div>
            <div className="col-md-4">
            <form class="form-inline md-form form-sm mt-0">
  <i class="fas fa-search" aria-hidden="true"></i>
  <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
    aria-label="Search"/>
</form>
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
        <Switch>
        
          <Route path="/SignIn">
          <SignIn/>
          </Route>
          <Route path="/SignUp">
          <SignUp/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Header;