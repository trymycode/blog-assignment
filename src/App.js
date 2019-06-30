import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CreateComponent from './components/CreateComponent';
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>From appjs</h1>
        <CreateComponent/>
      </div>
    )
  }
}
export default App;