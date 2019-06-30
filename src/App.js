import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateComponent from './components/CreateComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/create" component={CreateComponent}></Route>
          <FooterComponent />
        </div>
      </Router>
    )
  }
}
export default App;