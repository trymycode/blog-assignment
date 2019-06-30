import React, { Component } from 'react';
import BlogComponent from './components/BlogComponent';
class App extends Component {
  render() {
    return (
      <div>
        <h1>From appjs</h1>
        <BlogComponent/>
      </div>
    )
  }
}
export default App;