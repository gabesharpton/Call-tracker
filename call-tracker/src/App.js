import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import NewCall from './components/NewCall';
import EmployeeList from './components/EmployeeList';
import Team from './components/Team';

class App extends Component {
  render(){
  return (
    <Router>

<div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/edit/:id" className="nav-link">Employee List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">New Call</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
      <Route path="/" exact component={Team} />
      <Route path="/edit/:id" component={EmployeeList} />
      <Route path="/create" component={NewCall} />
        </div>
    </Router>
  
  )
  }
};
export default App;
